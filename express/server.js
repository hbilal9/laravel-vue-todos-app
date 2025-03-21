import express from 'express';
import puppeteer from 'puppeteer';

// Load environment variables (if any)

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware to parse JSON requests
app.use(express.json());

/**
 * Route to handle search queries
 */
app.post('/api/search', async (req, res) => {
    const { query } = req.body;

    // Validate input
    if (!query || typeof query !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing query parameter' });
    }

    try {
        // Launch Puppeteer with more realistic browser settings
        const browser = await puppeteer.launch();

        const page = await browser.newPage();

        // Set viewport to a common desktop resolution
        await page.setViewport({ width: 1280, height: 800 });

        try {
            // Navigate to DuckDuckGo instead of Google (more scraping-friendly)
            await page.goto('https://duckduckgo.com/', { 
                waitUntil: 'networkidle2',
                timeout: 30000 
            });

            // console.log('Page loaded successfully');

            // Type the query into the search box (DuckDuckGo's selector)
            await page.waitForSelector('input[name="q"]', { timeout: 5000 });
            await page.type('input[name="q"]', query);
            
            // Submit the form
            await Promise.all([
                page.waitForNavigation({ waitUntil: 'networkidle2' }),
                page.keyboard.press('Enter'),
            ]);

            // console.log('Search results page loaded');

            // Extract the titles of the first 10 search results from DuckDuckGo
            const titles = await page.evaluate(() => {
                // Google search results selector
                const resultElements = Array.from(document.querySelectorAll('h3'));
                console.log('Found result elements:', resultElements.length);
                
                // Extract text from result elements
                return resultElements
                    .filter(el => el.textContent.trim().length > 0)
                    .map(el => el.textContent.trim())
                    .slice(0, 10);
            });

            // console.log('Extracted titles:', titles);

            // Close the browser
            await browser.close();

            // Return the titles as JSON response
            return res.json({ titles });
            
        } catch (pageError) {
            console.error('Page interaction error:', pageError);
            
            // Take a screenshot to see what happened
            await page.screenshot({ path: 'error-state.png' });
            
            // Try to get the HTML content to debug
            const pageContent = await page.content();
            console.log('Page content excerpt:', pageContent.substring(0, 500) + '...');
            
            await browser.close();
            throw pageError;
        }
    } catch (error) {
        console.error('Error during search:', error.message);
        return res.status(500).json({ 
            error: 'An error occurred while processing your request',
            details: error.message 
        });
    }
});

/**
 * Start the server
 */
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
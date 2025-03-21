import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: () => import("@/features/todos/page.vue"),
	},
	{
		path: "/about",
		name: "About",
		component: () => import("@/features/about/page.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: routes,

	linkActiveClass: "active",
	linkExactActiveClass: "active",
});

router.beforeEach((_to, _from, next) => {
	next();
});

export default router;

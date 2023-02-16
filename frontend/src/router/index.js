import { createWebHistory, createRouter } from "vue-router";
import HomeVue from "../views/Home.vue";
import LoginVue from "../views/login/Login.vue";
import ErrorVue from "../views/error/Error.vue";

/* admin */
import AdminDashboardVue from "../views/admin/dashboard.vue";
import AdminClinetsVue from "../views/admin/clients.vue";
import AdminRoomsVue from "../views/admin/rooms.vue";
import AdminLogsVue from "../views/admin/logs.vue";

const routes = [
    { path: "/", name: "home", component: HomeVue, },
    { path: "/login", name: "Login", component: LoginVue, },
    { path: "/error", name: "Error", component: ErrorVue, },
    { path: "/admin/dashboard", name: "adminDashboard", component: AdminDashboardVue, },
    { path: "/admin/clients", name: "adminClients", component: AdminClinetsVue, },
    { path: "/admin/rooms", name: "adminRooms", component: AdminRoomsVue, },
    { path: "/admin/logs", name: "adminLogs", component: AdminLogsVue, },
    { path: "/:pathMatch(.*)*", redirect: "/error" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    console.error(`from: ${from.fullPath}, to: ${to.fullPath}`);
});

export default router;
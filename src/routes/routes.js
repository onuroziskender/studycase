const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            MainView: () => import('../views/Home.vue')
        }
    },
    {
        path: '/login',
        name: 'login',
        components: {
            MainView: () => import('../views/Home.vue')
        }
    },
    {
        path: '/register',
        name: 'register',
        components: {
            MainView: () => import('../views/Register.vue')
        }
    }

]

export default routes
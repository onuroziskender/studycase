import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: '',
    linkExactActiveClass: '',
    scrollBehavior: to => {
        if (to.hash) {
            return { selector: to.hash }
        }

        return { x: 0, y: 0 }
    }
})

export default router
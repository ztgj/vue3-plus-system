import Cookies from "js-cookie"
// import router from '../src/router'
export default {
    state: {
        isCollapse: false,
        //面包屑数据定义
        tabsList: [
            {
                path: '/',
                name: 'home',
                label: '首页',
                icon: 'home'
            }
        ],
        //用一个属性记录当前的选中的路由是哪一项
        currentMenu: null,
        menu: [],
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
         //点击侧边栏的时候改变state里的名称
        selectMenu(state, val) {
            if (val.name !== 'home') {
                state.currentMenu = val
                const result = state.tabsList.findIndex(item => item.name === val.name)
                if (result === -1) {
                    state.tabsList.push(val)
                }
            } else {
                state.currentMenu = null
            }
        },
        closeTag(state, val) {
            const result = state.tabsList.findIndex(item => item.name === val.name)
            state.tabsList.splice(result, 1)
        },
        setMenu(state, val) {
            state.menu = val
            //将menu缓存在cookie中，避免刷新时丢失
            Cookies.set('menu', JSON.stringify(val))
        },
        clearMenu(state) {
            state.menu = []
            Cookies.remove('menu')
        },
        addMenu(state, router) {
            if (!Cookies.get('menu')) {
                return
            }
            const menu = JSON.parse(Cookies.get('menu'))
            state.menu = menu
            const menuArray = []
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(item => {
                        item.component = () => import(`../views/${item.url}`)
                        return item
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            })
            //添加动态路由
            menuArray.forEach(item => {
                router.addRoute('Main', item)
            })
        },
    }
}
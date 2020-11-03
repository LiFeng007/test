import Vue from 'vue'
import Router from 'vue-router'
// 线索管理
import EffectivityThread from '../pages/thread/components/effectivityThread.vue'
import FailThread from '../pages/thread/components/failThread.vue'
import HighRiskThread from '../pages/thread/components/HighRiskThread.vue'
import InvalidThread from '../pages/thread/components/invalidThread.vue'
import RepetitionThread from '../pages/thread/components/repetitionThread.vue'
import SpecialThread from '../pages/thread/components/specialThread.vue'

// 规则管理
import cityPoll from '../pages/rule/components/cityPoll.vue'
import dealerRule from '../pages/rule/components/dealerRule.vue'
import operationRulr from '../pages/rule/components/operationRulr.vue'
import risk from '../pages/rule/components/risk.vue'
import threadRecycle from '../pages/rule/components/threadRecycle.vue'

// 线索流转监控
import  threadMonitoring from '../pages/threadMonitoring/components/threadMonitoring.vue'
Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',
            redirect:'index'
        },
        {
            path:'/index',
            component:() => import('../pages/index')
        },
        {
            path:'/login',
            component:() => import('../pages/login.vue')
        },
        {
            path:'/thread',
            component:() => import('../pages/thread/thread.vue'),
            children :[
                {
                    path:'有效线索',
                    name:'effectivityThread',
                    component:EffectivityThread,
                },
                {
                    path:'特殊线索',
                    name:'specialThread',
                    component:SpecialThread,
                },
                {
                    path:'高风险线索',
                    name:'highRiskThread',
                    component:HighRiskThread,
                },
                {
                    path:'无效线索',
                    name:'invalidThread',
                    component:InvalidThread,
                },
                {
                    path:'重复线索',
                    name:'RepetitionThread',
                    component:RepetitionThread,
                },
                {
                    path:'战败线索',
                    name:'FailThread',
                    component:FailThread,
                },
            ]
        },
        {
            path:'/thread_monitoring',
            component:() => import('../pages/threadMonitoring/threadMonitoring.vue') ,
            children:[
                {
                    path:'线索流转监控',
                    name:'threadMonitoring',
                    component:threadMonitoring,
                },
            ]
        },
        {
            path:'/rule',
            component:() => import('../pages/rule/rule.vue'),
            children:[
                {
                    path:'业务条件规则配置',
                    name:'operationRulr',
                    component:operationRulr,
                },
                {
                    path:'经销商配置',
                    name:'dealerRule',
                    component:dealerRule,
                },
                {
                    path:'线索回收规则配置',
                    name:'threadRecycle',
                    component:threadRecycle,
                },
                {
                    path:'风险配置',
                    name:'risk',
                    component:risk,
                },
                {
                    path:'城市轮询表',
                    name:'cityPoll',
                    component:cityPoll,
                },
            ]
        },
        {
            path:"*",
            component:() => import('../pages/NoPages.vue')
        },
    ]
})
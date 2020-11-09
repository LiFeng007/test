import Vue from 'vue'
import Router from 'vue-router'
import VueRouter from 'vue-router'
/****线索管理*****/ 
import EffectivityThread from '../pages/thread/components/effectivityThread.vue'
import FailThread from '../pages/thread/components/failThread.vue'
import HighRiskThread from '../pages/thread/components/HighRiskThread.vue'
import InvalidThread from '../pages/thread/components/invalidThread.vue'
import RepetitionThread from '../pages/thread/components/repetitionThread.vue'
import SpecialThread from '../pages/thread/components/specialThread.vue'
// 无效线索子路由
import InvalidClue from '../pages/thread/components/invalidThread/InvalidClue.vue'
import InvalidInformation from  '../pages/thread/components/invalidThread/InvalidInformation.vue'
// 特殊消息子路由
import MoblistThread from '../pages/thread/components/specialThread/MoblistThread.vue'
import NoDisturbThread from '../pages/thread/components/specialThread/NoDisturbThread.vue'
import WhiteListThread from '../pages/thread/components/specialThread/WhiteListThread.vue'
// 线索管理详情页
import detail from '@/pages/thread/detail'

/****规则管理***/ 
import cityPoll from '../pages/rule/components/cityPoll.vue'
import dealerRule from '../pages/rule/components/dealerRule.vue'
import operationRulr from '../pages/rule/components/operationRulr.vue'
import risk from '../pages/rule/components/risk.vue'
import threadRecycle from '../pages/rule/components/threadRecycle.vue'

/*****线索流转监控****/ 
import  threadMonitoring from '../pages/threadMonitoring/components/threadMonitoring.vue'
Vue.use(Router)
export default new Router({
    mode: 'history',
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
            name:'threadInfo',
            redirect:'/thread/有效线索',
            component:() => import('../pages/thread/thread.vue'),
            children :[
                {
                    path:'有效线索',
                    name:'effectivityThread',
                    component:EffectivityThread,
                },
                {
                    path:'/thread/有效线索/线索详情',
                    name:'threadInfo',
                    component:detail
                },
                {
                    path:'特殊线索',
                    name:'specialThread',
                    redirect:'/thread/特殊线索/黑名单潜客线索',
                    component:SpecialThread,
                    children:[
                        {
                            path:'黑名单潜客线索',
                            name:'MoblistThread',
                            component:MoblistThread,
                        },
                        {
                            path:'/thread/特殊线索/黑名单潜客线索/线索详情',
                            component:detail,
                        },
                        {
                            path:'白名单潜客线索',
                            name:'WhiteListThread',
                            component:WhiteListThread,
                        },
                        {
                            path:'/thread/特殊线索/白名单潜客线索/线索详情',
                            component:detail,
                        },
                        {
                            path:'消息免打扰潜客线索',
                            name:'NoDisturbThread',
                            component:NoDisturbThread,
                        },
                        {
                            path:'/thread/特殊线索/消息免打扰潜客线索/线索详情',
                            component:detail,
                        },
                    ]
                },
                {
                    path:'高风险线索',
                    name:'highRiskThread',
                    component:HighRiskThread,
                },
                {
                    path:'/thread/高风险线索/线索详情',
                    component:detail
                },
                {
                    path:'无效线索',
                    name:'invalidThread',
                    component:InvalidThread,
                    redirect:'/thread/无效线索/作废线索',
                    children:[
                        {
                            path:'信息无效线索',
                            name:'InvalidInformation',
                            component:InvalidInformation,
                        },
                        {
                            path:'/thread/无效线索/信息无效线索/线索详情',
                            component:detail,
                        },
                        {
                            path:'作废线索',
                            name:'InvalidClue',
                            component:InvalidClue,
                        },
                        {
                            path:'/thread/无效线索/作废线索/线索详情',
                            component:detail,
                        },
                    ]
                },
                {
                    path:'重复线索',
                    name:'RepetitionThread',
                    component:RepetitionThread,
                },
                {
                    path:'/thread/重复线索/线索详情',
                    component:detail,
                },
                {
                    path:'战败线索',
                    name:'FailThread',
                    component:FailThread,
                },
                {
                    path:'/thread/战败线索/线索详情',
                    component:detail,
                },
            ]
        },
        {
            path:'/thread_monitoring',
            redirect:'/thread_monitoring/线索流转监控',
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
            redirect:'/rule/业务条件规则配置',
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

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
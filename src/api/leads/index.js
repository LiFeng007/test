import axios from 'axios'

// 战败线索
export const queryDefeat = async data => axios ({
  method: 'post',
  url: 'http://10.58.21.4:8090/phoenix/vop/vop/defeat',
  data : data || {
    "leadsId":"",
    "vid":"",
    "phone":"",
    "intentionProvinceNumber":"",
    "intentionCityNumber":"",
    "sourceChannelName":""
  }
})
// 有效线索列表
export const queryEffective = async data => axios ({
  method: 'post',
  url: 'http://10.58.21.4:8090/phoenix/vop/crm/special/list',
  data:data || {
    leadsID : '1234'
  }
})
// 线索详情
export const queryDefault = async data => axios({
  method: 'post',
  url: 'http://10.58.21.4:8090/phoenix/vop/crm/special/detail?leads=2dda113',
  data:data || {
    // leadsID : '1234'
  }

})

// 黑名单
export const queryMobList = async data => axios ({
  method:'get',
  url:'http://10.58.21.4:8090/phoenix/vop/crm/special/leads?is_blacklist=0',
  params:data || {
      // 'leads_id':123,
  }
})

// 消息免打扰
export const queryDisturb = async data => axios ({
  method:'get',
  url:'http://10.58.21.4:8090/phoenix/vop/crm/special/leads?is_information_notdisturb=0',
  params:data || {

  }
})

// 白名单
export const queryWhiteList = async data => axios ({
  method:'get',
  url:'http://10.58.21.4:8090/phoenix/vop/crm/special/leads',
  params:data || {

  }
})
import Vue from 'vue'
import { formatMoney } from 'utils/methods'

const moment = require('moment')

/**
 * 时间戳转年月日
 */
Vue.filter('timestampTransfer', timestamp => {
    if (timestamp) {
        const time = new Date(timestamp)
        return moment(time).format('YYYY-MM-DD HH:mm:ss')
    }
    return ''
})

Vue.filter('timeHourTransfer', timestamp => {
    if (timestamp) {
        const time = new Date(timestamp)
        return `${moment(time).format('YYYY-MM-DD HH')}点`
    }
    return ''
})

Vue.filter('minuteToHour', minute => {
    if (minute === 0) {
        return 0
    }
    if (minute) {
        return (minute / 60).toFixed(1)
    }
    return ''
})
/**
 * 时间戳转时分秒
 */
Vue.filter('periodTimeTransfer', timestamp => {
    if (timestamp) {
        const time = new Date(timestamp)
        return moment(time).format('HH:mm:ss')
    }
    return ''
})

Vue.filter('moneyFilter', money => {
    if (money === 0) return '¥  0.00'
    if (money) {
        return `¥ ${Number(money).toFixed(2)}`
    }
    return ''
})

/**
 *  分转化成元
 */
Vue.filter('amountParser', price => {
    if (price !== '' && !isNaN(price)) {
        const parseAmount = (price / 100).toFixed(2)
        return parseAmount
    }
    return '--'
})

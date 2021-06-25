<template>
    <view class="index">
        <input v-model="inputMsg" type="text" placeholder="请输入" focus />
        <text class="msg">{{ msg }}</text>
        <view class="msg"> 测试文字大小</view>
    </view>
</template>

<script>
import './index.scss'

export default {
    data() {
        return {
            inputMsg: ''
        }
    },
    computed: {
        msg() {
            if (!this.inputMsg) return
            return `${this.inputMsg} is a big pig!!!!`
        }
    },
    created() {
        console.log(window)
    }
}
</script>

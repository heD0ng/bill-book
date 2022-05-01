<template>
    <div class="bill-list">
        <bill-item :item='item'></bill-item>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import BillItem from './BillItem.vue';
import {BillItemType, BillList} from '../index';
export default defineComponent({
    components:{
        BillItem
    },
    setup () {
        
        const item = reactive<BillList>({
            date: '2022-5',
            bills:[
                {
                    date: '5-1',
                    amount: '111',
                    type_name: '交通'
                },
                {
                    date: '5-1',
                    amount: '111',
                    type_name: '交通'
                },
                {
                    date: '5-1',
                    amount: '111',
                    type_name: '交通',
                    remark:'hello'
                }
            ]
        })

        return {
            item
        }
    }
})
</script>

<style lang='scss' scoped>
    .bill-list{
        margin: 10px;
    }
</style>
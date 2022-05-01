<template>
    <div class="bill">
        <div class="bill-item">
            支出：
        </div>
        <div class="bill-item">
            <span>
                {{selectedType.name}} <van-icon name="arrow-down"/>
            </span>
            <!--  -->
        </div>
        <div class="bill-item">
            <span>
                时间 <van-icon name="arrow-down"/>
            </span>
        </div>

        <!-- <DatePick></DatePick> -->
    </div>
    <bill-list></bill-list>
</template>

<script lang='ts'>
import {reactive, ref} from 'vue';
import DatePick from '@/components/date-pick/index.vue';
import { BillType } from "./index";
import BillList from './components/BillList.vue';

export default {
    components: { 
        BillList
    },
    setup () {
        const selectedType = reactive<BillType>({
            id:0,
            name: '全部类型'
        })
        return {
            selectedType
        }
    }
}
</script>

<style lang="scss" scoped>
    .bill{
        width: 100%;
        height: calc(100% - 48px);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.5rem;
        height: 48px;
        .bill-item{
            flex: 1;
        }
    }
</style>
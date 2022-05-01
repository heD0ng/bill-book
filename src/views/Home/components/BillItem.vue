<template>
  <van-cell-group inset class="card">
    <!-- 单日统计 -->
    <div class="card-title">
      <span class="card-title-date"> {{ props.item.date }} </span>
      <span class="card-title-amount"> 总计：{{total}} </span>
    </div>

    <!-- 单日清单 -->
    <van-swipe-cell v-for="bill in props.item.bills" :key="bill.id">
      <van-cell class="card-item">
        <div class="item-body">
          <span>
            <van-tag
              mark
              :type="bill.pay_type === 1 ? 'primary' : 'warning'"
              size="large"
              >{{ bill.type_name }}
            </van-tag>
          </span>
          <span>
            {{ bill.date }}
          </span>
          <span :style="{ color: 'green' }">{{ bill.amount }} </span>
        </div>
        <div v-if="bill.remark" class="item-footer">
          <span>
            备注：{{ bill.remark  }}
          </span>
        </div>
      </van-cell>
      <template #right>
        <van-button
          square
          type="danger"
          text="删除"
          style="height: 100%"
          @click="clickDelete(bill.id)"
        />
      </template>
    </van-swipe-cell>
  </van-cell-group>
</template>

<script setup lang="ts">
import { defineComponent, ref, PropType } from "vue";
import {BillItemType, BillList} from '../index';
import moment from 'moment';

const props  = defineProps<{
    item: BillList
}>();
let total =  ref<number>(0)
console.log(props);
props.item.bills.forEach((item:BillItemType)=>{
    total.value += Number(item.amount)
})

</script>

<style lang='scss' scoped>
.card {
    width: 100%;
    border: 1px solid #f7f8fa;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    .card-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    background-color: #f7f8fa;
    color: #000000;
    .card-title-date {
      font-size: 18px;
    }
    .card-title-amount {
      font-size: 13px;
      .expense {
        color: green;
      }
      .income {
        margin-left: 15px;
        color: red;
      }
    }
  }

  .card-item {
    // height: 40px;
    // line-height: 40px;
    margin-top: 10px;
    .item-body {
      font-size: 17px;
      display: flex;
      justify-content: space-between;
    }
    .item-footer {
      padding-top: 10px;
      font-size: 13px;
    }
  }
}
</style>
<style scoped>
    .van-cell-group--inset{
        margin: 0;
    }
</style>
<template>
  <!-- 显示日期选择器 -->
  <van-popup position="bottom" round>
    <van-datetime-picker
      v-model="currentDate"
      type="date"
      title="选择日期"
      :min-date="minDate"
      :max-date="maxDate"
      :formatter="formatter || _formatter"
    />
  </van-popup>
</template>

<script>
export default {
  setup() {
    const currentDate = ref(new Date());
    const minDate = new Date(
      new Date().setFullYear(new Date().getFullYear() - 1)
    );
    console.log(minDate);
    const maxDate = new Date();
    return {
      currentDate,
      minDate,
      maxDate,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
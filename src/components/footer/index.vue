<template>
    <div class="footer-container">
        <div class="item">
            首页
        </div>
        <div class="item">
            统计
        </div>
        <div class="item">
            我的
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
    .footer-container{
        position: fixed;
        bottom: 0;
        font-size: 0.5rem;
        width: 100%;
        height: 48px;
        display: flex;
        justify-content: center;
        align-items: center;
        .item{
            flex: 1;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
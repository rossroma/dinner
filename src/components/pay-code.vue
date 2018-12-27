<!--
 * @Author: kai.yang
 * @Date: 2018-11-21 20:10:50
 * @LastEditors: kai.yang
 * @LastEditTime: 2018-11-21 20:28:13
 * @Description: 扫码付款
 -->

<template>
  <div class="pay-code">
    <p class="tips"></p>
    <ul class="img-list">
      <li class="img"><img src="./imgs/wechat.jpg" alt=""></li>
      <li class="img"><img src="./imgs/alipay.jpg" alt=""></li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
  .pay-code {
    .img-list {
      .img {
        width: 200px;
        display: inline-block;
        img {
          width: 100%;
          display: block;
        }
      }
    }
  }
</style>

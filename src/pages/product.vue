<template>
  <div class="product">
    <ProductParam>
      <template v-slot:buy>
        <button class="btn">立即购买</button>
      </template>
    </ProductParam>
    <div class="video-box">
      <div class="overlay"></div>
      <div class="video">
        <span class="icon-close"></span>
        <video src="/images/product/video.mp4" autoplay controls="controls"></video>
      </div>
    </div>
  </div>
</template>

<script>
import ProductParam from "./../components/ProductParam";
export default {
  name: "product",
  components: {
    ProductParam
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";
.product {
  .btn {
    margin-left: 10px;
  }
  .video-box {
    .overlay {
      @include position(fixed);
      background-color: #333333;
      opacity: 0.4;
      z-index: 10;
    }
    .video {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      width: 1000px;
      height: 536px;
      .icon-close {
        position: absolute;
        top: 20px;
        right: 20px;
        @include bgImg(20px, 20px, "/images/icon-close.png");
        cursor: pointer;
        z-index: 10;
      }
      video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        outline: none;
      }
    }
  }
}
</style>
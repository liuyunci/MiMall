<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="username">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item,index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">
                                            {{item.name}}
                                        </div>
                                        <div class="pro-price">
                                            {{item.price | currency}}
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi红米</span>
                        <!-- <div class="children"></div> -->
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/images/nav-3-1.jpg'" alt="小米壁画电视">
                                        </div>
                                        <div class="pro-name">
                                            小米壁画电视
                                        </div>
                                        <div class="pro-price">
                                            6999元
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/images/nav-3-1.jpg'" alt="小米壁画电视">
                                        </div>
                                        <div class="pro-name">
                                            小米壁画电视
                                        </div>
                                        <div class="pro-price">
                                            6999元
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/images/nav-3-1.jpg'" alt="小米壁画电视">
                                        </div>
                                        <div class="pro-name">
                                            小米壁画电视
                                        </div>
                                        <div class="pro-price">
                                            6999元
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/images/nav-3-1.jpg'" alt="小米壁画电视">
                                        </div>
                                        <div class="pro-name">
                                            小米壁画电视
                                        </div>
                                        <div class="pro-price">
                                            6999元
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/images/nav-3-1.jpg'" alt="小米壁画电视">
                                        </div>
                                        <div class="pro-name">
                                            小米壁画电视
                                        </div>
                                        <div class="pro-price">
                                            6999元
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="'/images/nav-3-1.jpg'" alt="小米壁画电视">
                                        </div>
                                        <div class="pro-name">
                                            小米壁画电视
                                        </div>
                                        <div class="pro-price">
                                            6999元
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>     
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'nav-header',
    data(){
        return {
            username: this.$store.state.username,
            phoneList: []
        }
    },
    mounted(){
        this.getProductList();
    },
    filters:{
        currency(val){//金额格式化过滤器
            if(!val){
                return '0.00';
            }else{
                return '￥' + val.toFixed(2) + '元';
            }
        }
    },
    methods:{
        getProductList(){
            this.axios.get('/products',{
                params:{
                    categoryId:'100012',
                    pageSize:6
                }
            }).then((res) => {
                   this.phoneList = res.list;
            })
        },
        login(){
            this.$router.push('/login');
        },
        goToCart(){
            this.$router.push('/cart');
        }
    }
}
</script>

<style lang="scss">
    @import './../assets/scss/base.scss';
    @import './../assets/scss/mixin.scss';
    @import './../assets/scss/config.scss';
    .header{
        .nav-topbar{
            height: 39px;
            line-height: 39px;
            background-color: #333333;
            color: #b0b0b0;
            .container{
                @include flex();
                a{
                    display: inline-block;
                    color: #b0b0b0;
                    margin-right: 17px;
                }
                .my-cart{
                    width: 110px;
                    height: 39px;
                    background-color: #FF6600;
                    text-align: center;
                    color: #fff;
                    margin-right: 0;
                    .icon-cart{
                        @include bgImg(16px,12px,'/images/icon-cart-checked.png');
                        margin-right: 4px;
                    }
                }
            }

        }
        .nav-header{
            .container{
                height: 112px;
                @include flex();
                position: relative;
                .header-logo{
                    display: inline-block;
                    width: 55px;
                    height: 55px;
                    background-color:#FF6600;
                    a{
                        display: inline-block;
                        width: 110px;
                        height: 55px;
                        &:before{
                            content:' ';
                            @include bgImg(55px,55px,'/images/mi-logo.png');
                            transition: margin .2s;
                        }
                        &:after{
                            content:' ';
                            @include bgImg(55px,55px,'/images/mi-home.png');
                        }
                        &:hover:before{
                            margin-left: -55px;
                            transition: margin .2s;
                        }
                    }
                }
                .header-menu{
                    display: inline-block;
                    padding-left: 209px;
                    width: 643px;
                    .item-menu{
                        display:inline-block;
                        color:#333333;
                        font-weight: bold;
                        font-size: 16px;
                        line-height: 112px;
                        margin-right: 20px;
                        span{
                            cursor: pointer;
                        }
                        &:hover{
                            color:$colorA;
                            .children{
                                height: 220px;
                                opacity: 1;
                            }
                        }
                        .children{
                            position: absolute;
                            top: 112px;
                            left: 0;
                            width: 1226px;
                            height: 0;
                            opacity: 0;
                            overflow: hidden;
                            border-top: 1px solid #E5E5E5;
                            box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                            z-index: 10;
                            background-color: #fff;
                            transition: all .5s;
                            .product{
                                float: left;
                                width: 16.6%;
                                height: 220px;
                                font-size: 12px;
                                text-align: center;
                                line-height: 12px;
                                @include flex(center);
                                position: relative;
                                a{
                                    display: inline-block;
                                }
                                img{
                                    width:92px;
                                    height: auto;
                                    margin-top:26px;
                                }
                                .pro-img{
                                    height: 120px;
                                }
                                .pro-name{
                                    margin-bottom: 8px;
                                    color: $colorB;
                                }
                                .pro-price{
                                    color: $colorA;
                                }
                                &:after{
                                    content: ' ';
                                    position: absolute;
                                    top: 28px;
                                    right: 0;
                                    border-left: 1px solid $colorF;
                                    height: 100px;
                                    width: 1px;
                                }
                                &:last-child::after{
                                    display: none;
                                }
                            }
                        }
                    }
                }
                .header-search{
                    width:319px;
                    .wrapper{
                        height:50px;
                        border:1px solid #E0E0E0;
                        display: flex;
                        align-items: center;
                        input{
                            border: none;
                            border-right: 1px solid #E0E0E0;
                            width:264px;
                            height:50px;
                            padding-left: 14px;
                            box-sizing: border-box;
                        }
                        a{
                            @include bgImg(55px,52px,'/images/icon-search.png');
                            background-size: 18px 18px;
                            transition: all .2s;
                            &:hover{
                                background-color: $colorA;
                                transition: all .2s;
                                background-image: url('/images/icon-search-hover.png');
                            }
                        }
                    }
                }
            }
        }
    }
</style>
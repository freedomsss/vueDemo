<template>
    <div>
        <div class="tr-demo"></div>
        <div class="box">
            <div class="content"></div>
        </div>
        <div class="box2">
            <div class="content"></div>
        </div>
        <div class="box3">
            <img src="../assets/logo.png" width="200" height="200">
        </div>
        <div class="icon-arrow-down"></div>
        <div class="dot"></div>
        <div class="circle"></div>
    </div>
</template>

<style lang="less" scoped>
    /*https://www.zhangxinxu.com/wordpress/2018/08/css-gradient-dashed-border/*/
    .tr-demo {
        width:100px;
        height: 100px;
        background-color: #ff0081;
        transition: width 2s;
        margin: 0 auto;
        cursor: pointer;
        /*position: absolute;*/
        /*top: 0;*/
        &:hover{
            width: 300px;
            top: 100%;
        }
    }
    .box{
        width:100px;
        /*height: 100px;*/
        margin: 10px auto;
        border: 2px dashed #ffffff;
        background: linear-gradient(to right, #ff0081, #ffff00);
        background-origin: border-box;
        .content{
            width:100px;
            height: 100px;
            background-color: #ffffff;
        }
    }
    .box2{
        width:100px;
        /*height: 100px;*/
        margin: 10px auto;
        background: repeating-linear-gradient(135deg, transparent, transparent 3px, #ff0081 3px, #fff 8px);
        animation: shine 1s infinite linear;
        overflow: hidden;
        .content{
            height: 100px;
            margin: 1px; padding: 10px;
            background-color: #fff;
        }
    }
    @keyframes shine {
        0% { background-position: -1px -1px;}
        100% { background-position: -12px -12px;}
    }
    .box3 {
        display: inline-block;
        padding: 10px;
        position: relative;
    }
    .box3::before {
        content: '';
        position: absolute;
        left: 0; top: 0; right: 0; bottom: 0;
        border: 2px solid #cd0000;
        animation: borderAround 1.5s infinite linear;
    }
    @keyframes borderAround {
        0%, 100% { clip: rect(0 220px 2px 0); }
        25% { clip: rect(0 220px 220px 218px); }
        50% { clip: rect(218px 240px 240px 0); }
        75% { clip: rect(0 4px 240px 0); }
    }
    .icon-arrow-down {
        width: 20px; height: 20px;
        background: url('data:image/svg+xml;utf8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><path fill="#ff0081" d="M145.659,68.949c-5.101-5.208-13.372-5.208-18.473,0L99.479,97.233 L71.772,68.949c-5.1-5.208-13.371-5.208-18.473,0c-5.099,5.208-5.099,13.648,0,18.857l46.18,47.14l46.181-47.14 C150.759,82.598,150.759,74.157,145.659,68.949z"/></svg>') no-repeat center;
        background-size: 100%;
    }
    @keyframes straightLine {
        50% {
            transform: translate3D(100px, -100px, 0);
        }
    }

    .dot {
        width: 20px;
        height: 20px;
        background-color: #ff0081;
        border-radius: 50%;
        animation: straightLine 2.5s infinite linear;
    }
    .circle {
        width: 300px; height: 300px;
        background: conic-gradient(#9ED110, #50B517, #179067, #476EAF, #9f49ac, #CC42A2, #FF3BA7, #FF5800, #FF8100, #FEAC00, #FFCC00, #EDE604);
        border-radius: 50%;
    }
</style>

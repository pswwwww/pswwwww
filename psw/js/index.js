$(function(){
    // 获取用户昵称
      const nickname = getCookie('nickname')
      if(nickname){
        $('.off').addClass('hide')
        $('.on').text(`欢迎你：${nickname}`).removeClass('hide')
    
      }else{
        $('.off').removeClass('hide')
        $('.on').addClass('hide')
      }
    
    })
//给下载app添加事件
$('.down').hover(
    function(){
        // .css({'display':'block'})
        $('.load').stop()
                  .slideDown()
    },
    function(){
        $('.load').stop()
                  .slideUp()
    }
)
// 给购物车添加事件
$('.cart').hover(
    function(){
        $('.cart>div').stop()
                      .slideDown()
    },
    function(){
        $('.cart>div').stop()
                      .slideUp()
    }
)
//给搜索框添加失焦和触角事件
$('.search_input').on('blur',()=>{
    $('.search_input').css({'border':'1px solid #e0e0e0'})
    $('.search_button').css({'border': '1px solid #e0e0e0','border-left':'none'})
})
$('.search_input').on('focus',()=>{
    $('.search_input').css({'border':'1px solid #FF6700'})
    $('.search_button').css({'border':'1px solid #FF6700','border-left':'none'})
})

//页面头部下拉

$('.main_header>ul>li').hover(
    function(){
        $('.search_tishi').css({'display':'none'})
        $('.select').stop()
                    .slideDown()
    },
    function(){
        $('.select').stop()
                    .slideUp()
    }
)
$('.select').hover(
    function(){
        $('.select').stop()
                    .slideDown()
        
    },
    function(){
        
        $('.select').stop()
                    .slideUp()
    }
)
$('.main_header>ul>li:last-child()').unbind()
                                    .prev()
                                    .unbind()




// 搜索框
$('.search_input').on('blur',()=>{
    $('.search_tishi').hide()
})
$('.search_input').on('input',()=>{
     //添加百度提示
     let value =  $('.search_input').val()
    
     let str = `<script src= 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=33425,33401,31253,33284,33286,33350,33414,26350,33389,33370&wd=${value}&req=2&csor=1&cb=fn&_=1610199023678'></script>`
     $('body').append(str)
     str= ``
     fn()
})

$('.search_input').on('focus',()=>{
    $('.search_tishi').show()
})
//渲染页面搜索
let str =  `
<div>面</div>
<div>向</div>
<div>百</div>
<div>度</div>
<div>吧</div>`
$('.search_tishi').html(str)
//接收返回过来的提示
function fn({g}){
    str = ``
    g.forEach(function(item){  
         str += `<div>${item.q}</div>`
    })
    $('.search_tishi').html(str)
    str = ``
}



//倒计时
fn1()
function fn1(){
    let time = new Date()
let time1= new Date()
// let time1 = new Date(2021-1-10-12)
// let time1 = new Date(time.getHours())
 time1= new Date()
    time1.setHours(time.getHours()+1)
    time1.setMinutes(0)
    time1.setSeconds(0)
    let tc = time1-time
    let h = parseInt(tc/1000/60/60%24)
    let m = parseInt(tc/1000/60%60)
    let se = parseInt(tc/1000%60)
 let s = `  <div class="time_d1">${time.getHours()}:00场</div>
<img src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
bWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1
MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv
IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS
ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD
cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j
ZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1
bWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N
OkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy
Qzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF
OEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht
cG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE
cHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf
S48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY
jRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN
JbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL
ijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7
KnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L
bN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc
xDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V
kBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU
Kc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E
cnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ
7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII=">
<p>距离结束还有</p>
<div class="time">
<span>00</span>
<i>:</i>
<span>${m}</span>
<i>:</i>
<span>${se}</span>
</div>`
$('.body_time').html(s)
}
time_d()
function time_d(){
    setInterval(function(){
    fn1()
    },1000)
}




//渲染第一个列表
list1()
function list1(){
    const res =  $GLOBAL_HOME['goodsFloorData'][2].body.product_list
    let str = ``
    for(let i =0 ;i<8;i++){
        str+=` <li>
        <img src="${res[i].img_url}" alt="">
        <a href="./detail.html" style="color:black"> <p>${res[i].product_name}</p>
        <div>${res[i].product_brief}</div>
        <section>${res[i].product_price}元</section></a>
     </li>`
    }
    $('.gi_list_x>ul').html(str)
}



//渲染第二个列表
list2()
function list2(){
    const res1 = $GLOBAL_HOME['goodsFloorData'][4].body.left_ad.items[0]
    const res2 = $GLOBAL_HOME['goodsFloorData'][4].body.left_ad.items[1]
    let str = `<div class="list2_left1">
    <img src="${res1.img_url}" alt="">
</div>
<div class="list2_left2">
    <img src="${res2.img_url}" alt="">
</div>`
$('.list2_div').html(str)
str=``
    const res = $GLOBAL_HOME['goodsFloorData'][4].body.tab_content[0].product_list
    for(let i = 0 ;i<res.length-1;i++){
        const r = $GLOBAL_HOME['goodsFloorData'][4].body.tab_content[0].product_list[i]
    
        str +=`<li><img src="${r.img_url}" alt="">
        <p>${r.product_name}</p>
        <div>${r.product_brief}</div>
        <aside>${r.product_price}元 <del style="text-decoration: line-through;">${r.product_org_price}元</del></aside>
</li>`
    }
    
    str+=`<li class="dd" style="background-color: #F5F5F5; padding: 0;">
        <aside class="dd_d">
            <div>
            <p>米家互联网烟灶套装（天然气）</p>        
            <section>2298元</section>
            </div>
            <img src="${$GLOBAL_HOME['goodsFloorData'][4].body.tab_content[0].product_list[7].img_url}" alt="">
        </aside>
        <div class="dd_dd">
            <!-- <i class="iconfont-circle-arrow-right"></i> -->
            <p>浏览更多</p>
            <section>热门</section>
        </div>
    </li>
    `
    $('.list2_ul').html(str)
    str=``
}
function list_2(){
    const res1 = $GLOBAL_HOME['goodsFloorData'][4].body.left_ad.items[0]
    const res2 = $GLOBAL_HOME['goodsFloorData'][4].body.left_ad.items[1]
    
    let str = `<div class="list2_left1">
    <img src="${res1.img_url}" alt="">
</div>
<div class="list2_left2">
    <img src="${res2.img_url}" alt="">
</div>`
$('.list2_div').html(str)
str=``
    const res = $GLOBAL_HOME['goodsFloorData'][4].body.tab_content[1].product_list
    // console.log(res);
    for(let i = 0 ;i<res.length-1;i++){
        const r = $GLOBAL_HOME['goodsFloorData'][4].body.tab_content[1].product_list[i]
    
        str +=`<li><img src="${r.img_url}" alt="">
        <p>${r.product_name}</p>
        <div>${r.product_brief}</div>
        <aside>${r.product_price}元 <del style="text-decoration: line-through;">${r.product_org_price}元</del></aside>
</li>`
    }
    console.log($GLOBAL_HOME['goodsFloorData'][4].body)
    str+=`<li class="dd" style="background-color: #F5F5F5; padding: 0;">
        <aside class="dd_d">
            <div>
            <p>${res[7].product_name}</p>        
            <section>${res[7].product_price} 元</section>
            </div>
            <img src="${res[7].img_url}" alt="">
        </aside>
        <div class="dd_dd">
            <!-- <i class="iconfont-circle-arrow-right"></i> -->
            <p>浏览更多</p>
            <section>${$GLOBAL_HOME['goodsFloorData'][4].body.tab_content[1].tab_name}</section>
        </div>
    </li>
    `
    $('.list2_ul').html(str)
    str=``
}
$('.span1').on('mouseover',function(){
    list2()
})
$('.span2').on('mouseover',function(){
    list_2()
})















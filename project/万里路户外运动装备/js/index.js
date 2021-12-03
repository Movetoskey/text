$(function () {
    // 第一个轮播图
    var i = 0;
    function run() {
        i++;
        $('.img-bg').animate({ left: (-100 * i) + '%' }, 1000, function () {
            i = 0;
            $('.img-bg').append($('.img-bg img').first())
            $('.img-bg').css('left', '0px')
        })
    }
    var timer = setInterval(run, 3000)
    $('.img').mouseenter(function () {
        clearInterval(timer)
    })
    $('.img').mouseleave(function () {
        timer = setInterval(run, 3000)
    })
    $('.img i').eq(0).click(function(){
        console.log(111)
    })
    $('.img i').eq(1).click(function(){
        run()
    })

    // 第二个轮播图
    var m = 0;
    function funs() {
        m++;
        $('.items').animate({ left: -287 * m + 'px' }, 2, function () {
            if (m >= $('.items li').length) {
                m = 0;
            }
            $('.items').append($('.items li').first())
            $('.items').css('left', '0px')
            $('.icon li').eq(m).attr('class', 'active').siblings().removeAttr('class')
        })
    }
    var time = setInterval(funs, 2000)
    // 给小圆点绑定点击事件
    $('.icon li').click(function () {
        console.log($(this).index())
        m = $(this).index() - 1
        funs()
    })
    $('.icon').mouseover(function () {
        clearInterval(time)
    })
    $('.icon').mouseout(function () {
        time = setInterval(funs, 2000)
    })



    // 第三个遮罩层
    $('.pho .pro-show ul li').mouseenter(function () {
        $(this).find('div').slideDown(500)
    })
    $('.pho .pro-show ul li').mouseleave(function () {
        $(this).find('div').slideUp(500)
    })

    // 第四个轮播图
    var Y = 0;
    function run1() {
        Y++;
        if (Y >= $('.pro-Infor-news-l ul li').length) {
            Y = 0;
        }
        $('.pro-Infor-news-l ul li').eq(Y).show().siblings().hide()
    }
    var tim = setInterval(run1, 2000)

    $('.pro-Infor-news-l').mouseenter(function(){
        clearInterval(tim)
    })
    $('.pro-Infor-news-l').mouseleave(function(){
        tim = setInterval(run1,2000)
    })
    // 第五个隐藏与显示
    $('.pro-Ser-img ul li').mouseenter(function () {
        $(this).find("a img").show()
    })
    $('.pro-Ser-img ul li').mouseleave(function () {
        $(this).find("a img").hide()
    })


    // 产品展示
    var n = 0;
    function fun() {
        n++;
        if (n >= $('.list-pro-show ul').length) {
            n = 0;
        }
        $('.list-pro-show .hide').hide()
        $('.list-pro-show ul').eq(n).show().siblings().hide()
        $('.nav-list li').eq(n).addClass('active').siblings().removeClass('active')
    }


    // 给小圆点绑定点击事件
    $('.nav-list li').click(function () {
        n = $(this).index() - 1
        fun()
    })



    // 户外咨询
    var X = 0;
    function dun() {
        X++;
        if (X >= $('.list-title ul li').length) {
            X = 0;
        }
        $('.list-title ul li').eq(X).show().siblings().hide()
        $('.sub-list ul li').eq(X).addClass('active').siblings().removeClass('active')
    }


    // 给小圆点绑定点击事件
    $('.sub-list ul li').click(function () {
        X = $(this).index() - 1
        dun()
    })




    // 正则验证
    var flag1 = false
    var flag2 = false
    var flag3 = false
    var flag4 = false



    //    产品
    $('.product').blur(function () {
        var product = $('.product').val()
        var pattern = /^[\u4e00-\u9fa5a-zA-Z0-9]{3,20}$/
        if (product != '') {
            if (pattern.test(product)) {
                this.nextElementSibling.innerHTML = ''
                flag1 = true
            } else {
                this.nextElementSibling.innerHTML = '汉字、字母、数字组成长度为3~20个字符'
            }
        }
    })

    //用户
    $('.user').blur(function () {
        var user = $('.user').val()
        var pattern = /^[\u4e00-\u9fa5a-zA-Z0-9]{2,10}$/
        if (user != '') {
            if (pattern.test(user)) {
                this.nextElementSibling.innerHTML = ''
                flag2 = true
            } else {
                this.nextElementSibling.innerHTML = '汉字、数字、字母组成长度为2~10个字符'
            }
        }
    })

    // tel
    $('.tel').blur(function () {
        var tel = $('.tel').val()
        var pattern = /^1[3-9]\d{9}$/
        if (tel != '') {
            if (pattern.test(tel)) {
                this.nextElementSibling.innerHTML = ''
                flag3 = true
            } else {
                this.nextElementSibling.innerHTML = '请输入11位正确的电话号码'
            }
        }
    })

    // 邮件
    $('.email').blur(function () {
        var email = $('.email').val()
        var pattern = /^[a-zA-Z0-9][\w]{4,9}@[a-zA-Z0-9]{2,8}\.([a-zA-Z]{2,4})$/
        if (email != '') {
            if (pattern.test(email)) {
                this.nextElementSibling.innerHTML = ''
                flag4 = true
            } else {
                this.nextElementSibling.innerHTML = '请输入正确的邮箱地址'
            }
        }
    })


    // 缓存
    
    var btn = $('button')
    btn.click(function(){
        var obj = {
             product:$('.product').val(),
             user:$('.user').val(),
             tel:$('.tel').val(),
             email:$('.email').val(),
             textarea:$('textarea').val()
        }
        var infoList = JSON.parse(window.localStorage.getItem('infoList')) || [];
        infoList.push(obj)
        window.localStorage.setItem('infoList',JSON.stringify(infoList))
    })

}) 

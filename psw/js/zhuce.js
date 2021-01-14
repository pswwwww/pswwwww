
          let index = 0



          
          $('.username').on('input',function(){
              const zhang = /^[a-z0-9]\w{4,11}/i
                if(!(zhang.test($(this).val()))){
                   $(this).addClass('add')
                   $(this).removeClass('yes')
                    return
                }else{
                    $(this).addClass('yes')
                   $(this).removeClass('add')
                    index++
                }
          })



          $('.password').on('input',function(){
              const low = (/\d{6}/)
              const middle = (/[a-zA-z]+/)
              const high = (/[!@#\$%\^&\*\.]+/)
              let count = 0
                if(low.test($(this).val())){
                    index++
                    if(!($(this).val()==$('.password2').val())){
                    $('.password2').addClass('add')
                    $('.password2').removeClass('yes')
                    }
                    $(this).removeClass('add')
                    $(this).addClass('yes')
                    $('.pStrong').css({'display':'block'})
                    count++
                    if(middle.test($(this).val())){
                        count++
                    }
                    if(high.test($(this).val())){
                        count++
                    }
                    console.log(count)
                    $('span').removeClass('active')
                    $('span').eq(count-1).addClass('active')
                }else{
                    $(this).removeClass('yes')
                    $(this).addClass('add')
                    $('.pStrong').css({'display':'none'})
                    return
                }
          })



          $('.password2').on('input',function(){
              if($(this).val()===$('.password').val()){
                index++
                if(!($(this).val())){
                    $(this).addClass('add')
                    $(this).removeClass('yes')
              }else{
                $(this).removeClass('add')
                $(this).addClass('yes')
              }
              }else{
                $(this).addClass('add')
                $(this).removeClass('yes')
               
                return
              }
          })


          $('.nickname').on('input',function(){
            index++
            if(!($(this).val())){
                $(this).addClass('add')
                $(this).removeClass('yes')
                return
            }else{
               $(this).removeClass('add')
               $(this).addClass('yes')
            }
          })


          $('.logon2').click(async (e)=>{
            const username = $('username').val()
            const password  = $('.password').val()
            const nickname = $('.nickname').val()
            if(e.preventDefault){
                e.preventDefault();
            }else{
                window.event.returnValue == false;
            }
                if(!($('input').length===index)){
                    console.log(index)
                    return
                }
                const res =  await $.post('../server/login(2).php',{username,password,nickname},null,'json')
           
                if(!(res.code)){
                    alert('用户名存在')
                }else{
                    window.location.href = '../views/login.html'
                }

          })

$(function(){
  $('.item').each(function(idx,el){
    var oldsrc='',newsrc=''
    $(el).mouseover(function(){
      oldsrc = $(this).find('img').attr('src')
      newsrc = $(this).find('img').attr('src').slice(0,-4) + '-active.png' 
      $(this).find('img').attr('src',newsrc)
      $(this).addClass('active').siblings().removeClass('active')
    }).mouseout(function(){
      $(this).removeClass('active')
      $(this).find('img').attr('src',oldsrc)
    })
    $(el).click(function(){
      $(this).addClass('active')
      $(this).find('img').attr('src',newsrc)
    })
  })
  $('.search .input img').click(function(){
    $(this).parents('.search').addClass('active')
    $(this).siblings('input').trigger('focus')
  })
  
})
$(function(){
$(".lazy").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    dots:true,
    
  });
 
  $(".regular").slick({//sec5
    dots: true,
    infinite: true,
    slidesToShow: 3,//몇개의 이미지가 보일 지
    slidesToScroll: 1//클릭할때 몇칸씩 넘어갈지
  });


    var slide;
    slide = setInterval(function(){
        $('.notice .notice_list > li:first-child').animate({
            'margin-top':'-2rem'},600,function(){
          $('.notice .notice_list').append(
          $('.notice .notice_list > li:first-child')); 
          $('.notice .notice_list > li:last-child').css({'margin-top':0});
            });
    },2000);



  

})//jq end




$(function(){
  var sta = 1;
  $('.navbar_toggleBtn').click(function(){
      if (sta == 1) {
          $(this).addClass('on');
          $('.nav_menu').fadeIn();
          sta = 2;
      }else {
          $(this).removeClass('on');
          $('.nav_menu').fadeOut();
          sta = 1;
      }
      $('.nav_menu').click(function(){
          $('nav_menu').hide();
      })//nav_menu
  })//navbar_toggleBtn
})//end

//modal
$(function(){
  $('.partner_info').click(function(){
   var img = $(this).find('img');//여러개의 partner_info중에서 하나만 하기 위해서 this를 씀
   var img_src = img.attr('data_img');//attr은 태그들을 찾아주는 것이다 ''속에 잇는 값을 기억을 해 주는 것이다.

      $('#modal').show();//열기
      $('#modal img').attr('src',img_src);//attr('src','')이렇게해서 값을 두개 넣어주면 앞에껀 기억을해서 뒤에꺼로 바꾸어줌
      $('#modal .txt').text(img_alt);//글씨가 들어가는 메소드(태그를 계속 추가 하고싶으면 어팬드)위에 기억하는 img_alt를 넣음
      //(포트폴리오에 넣으면 좋다 클릭하면 그림이 바뀌는 것)
      $('#modal .txt_title').text(img_title);//4번 
  })

  $('#modal, #btn-close').click(function(){
      $('#modal').hide();//닫기
      //갤러리나 이미지에 사용하면 좋음 
  })

})

$(document).ready(function() {
  var inputs = $(".progress-container").find($("label") );
  
  for(var i =0 ; i< inputs.length; i ++)
  { 
       var index = i +1;
     var time = ((inputs.length)-i ) * 100;
    $(".progress-container label:nth-child("+ index+")").css( "-webkit-animation", "anim 3s "+time+"ms infinite ease-in-out" );
    $(".progress-container label:nth-child("+index+")").css( "-animation", "anim 3s "+time+"ms infinite ease-in-out" );
  }

})







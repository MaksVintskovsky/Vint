
$(document).ready(function(){

  
  // $('#datetimepicker1').datetimepicker();
  // $('#datetimepicker4').datetimepicker();

  // $('.card-slider-top').bxSlider({
  //   speed: 300,
  //   controls: false,
  //   pagerCustom: '#bx-pager'
  // });
 
  $('.main_slider').owlCarousel({
    dots: true,
    nav: true,
    loop: true,
    center: true,
    items: 1,
    navText: ["<img src='img/slider/sliderLeft.png' class='main_slider_left' alt='1'>",
              "<img src='img/slider/sliderRight.png' class='main_slider_right' alt='2'>"]
  });
  $(".partners_slider").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    // autoWidth:true,
    responsive : {
      0 : {
        items: 2
      },
      768 : {
        items: 3
      },
      992 : {
        items: 4
      }
    }
  });
  $(".our_blog_slider").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    margin: 20,
    autoWidth:true,
    responsive : {
      0 : {
        items: 1,
        
      },
      992 : {
        items: 3,
        // autoWidth:true,
      }
    }
  });

  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 20000,
    values: [ 0, 20000 ],
    slide: function( event, ui ) {
      $( "#slider-min" ).val( ui.values[ 0 ] );
      $( "#slider-max" ).val( ui.values[ 1 ] );
    }
  });

  // $( ".ui-slider-handle" ).on('mousemove', function(e){
  //   console.log($( "#slider-max" ).val())
  //   $( ".ui-slider-handle::after" ).css( content , $( "#slider-max" ).val())
  // });
  // $( ".range-num" ).

  $( "#slider-min" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  $( "#slider-max" ).val( $( "#slider-range" ).slider( "values", 1 ) );
  // $('.second_slider_right').owlCarousel({
  //   dots: false,
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeout: 3500,
  //   autoplaySpeed: 1500,
  //   margin: 20,
  //   responsive : {
  //     0 : {
  //       items: 3 
  //     },
  //     768 : {
  //       items: 4
  //     },
  //     992 : {
  //       items: 5
  //     }
  //   }
  // });
  // $('.second_slider_left').owlCarousel({
  //   rtl:true,
  //   dots: false,
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  //   autoplaySpeed: 1500,
  //   margin: 20,
  //   responsive : {
  //     0 : {
  //       items: 3
  //     },
  //     768 : {
  //       items: 4
  //     },
  //     992 : {
  //       items: 5
  //     }
  //   }
  // });
 
  // $('.third_slider').owlCarousel({
  //   dots: false,
  //   nav: false,
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeout: 3800,
  //   autoplaySpeed: 1500,
  //   margin: 30,
  //   responsive : {
  //     0 : {
  //       items: 3 
  //     },
  //     768 : {
  //       items: 4
  //     },
  //     992 : {
  //       items: 6
  //     }
  //   }
  // });
  // $('.fourth_slider').owlCarousel({
  //   rtl:true,
  //   dots: false,
  //   nav: false,
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  //   autoplaySpeed: 1300,
  //   margin: 30,
  //   responsive : {
  //     0 : {
  //       items: 3 
  //     },
  //     768 : {
  //       items: 4
  //     },
  //     992 : {
  //       items: 6
  //     }
  //   }
  // });
  // $('.fifth_slider').owlCarousel({
  //   dots: false,
  //   nav: false,
  //   loop: true,
  //   autoplay: true,
  //   autoplayTimeout: 3500,
  //   autoplaySpeed: 1300,
  //   margin: 30,
  //   responsive : {
  //     0 : {
  //       items: 3 
  //     },
  //     768 : {
  //       items: 4
  //     },
  //     992 : {
  //       items: 6
  //     }
  //   }
  // });

  // :::::::::::: Filter :::::::::::::
  // $('.btn-filtr').on('click', function(e){
  //   e.preventDefault();
  //   $('.filter-title').addClass('active');
  //   filter.show();
  //   bg.show(100);
  // });
  $('.filter-title').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.filter-section').slideToggle(200); 
  });
  $('.mob_btn-close').on('click', function(e){
    e.preventDefault();
    menu.hide();
    filter.hide();
    bg.hide(100);
  });

  $(".catalog_tab").click(function() {
    $(".catalog_tab").removeClass("active").eq($(this).index()).addClass("active");
    // $(".tab-content").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");
      // :::::::::::: Search :::::::::::::
  // $('.search').on('click', function(){
  //   $('.search-input').show().focus();
  //   $('.search button').show();
  //   $('.search-img').hide();
  // })
  // $(document).on('click', function(e){
  //   if(e.target != $('.search')[0] && $('.search').has(e.target).length === 0 ){
  //     $('.search-input').hide();
  //     $('.search button').hide();
  //     $('.search-img').show();
  //   }
  // });

});

    // :::::::::::: Menu :::::::::::::
$('.menu_close').on('click', function(){
  $('.header_menu').hide();
  $(this).hide();
  $('.menu_btn').show();
});

$('.menu_btn').on('click', function(){
  $('.header_menu').css('display', 'flex');
  $(this).hide();
  $('.menu_close').css('display', 'inline');
});
$('.category_item').on('click', function(){
  $('.secondary_menu').slideToggle();
  
});

// :::::::::::: Catalog View:::::::::::::
function lineView() { 
  $(".catalog_item_wrapper").removeClass("table_view col-6 col-md-4").addClass("list_view ");
  
};
function tableView() { 
  $(".catalog_item_wrapper").removeClass("list_view").addClass("table_view col-6 col-md-4");
  
};

 // :::::::::::: my_button preventDefaul:::::::::::::
$('a').on('click', function(e){
  e.preventDefault()
})

function show_this_tab(elem) { 
  $(".card-tab").removeClass("active");
  $(elem).addClass("active");
};
// function hide_search(){
//   $('.search-input').show().focus();
//   $('.search button').show();
//   $('.search-img').hide();
// };
function toggle_category(){
  $('.menu_category').slideToggle();
};
function close_category(){
  // $('.menu_category').slideDown(200);
  $('.menu_category').fadeOut(200);
};
function close_modal_change(e){
  $('#my_fucking_modal').hide(200);
};
function open_modal(event){
  $('.modal-change').show(200);
};

/*::::::::::::: Main Nav Active links:::::::::::::*/                      
// $('.myAccNav a').each(function () {             // получаем все нужные нам ссылки
//   var location = window.location.href; // получаем адрес страницы
//   var link = this.href;                // получаем адрес ссылки
//   if(location == link) {               // при совпадении адреса ссылки и адреса окна
//       $('.myAccNav a').removeClass('active')
//       $(this).addClass('active');  //добавляем класс
//   }
// });

/*::::::::::::: Accordeon Active item:::::::::::::*/
// $(".purchase .accordeon_content").not(":first").hide();
// $(".myChat .accordeon_content").not(":first").hide();
// $('.accordeon_head').on('click', function(){
//   $(this).toggleClass('active');
//   $(this).next('.accordeon_content').slideToggle(400); 
// });

/*::::::::::::: Textarea:::::::::::::*/
// var textarea = document.querySelector('textarea');
// textarea.addEventListener('keyup', function(){
//   if(this.scrollTop > 0){
//     this.style.height = this.scrollHeight + "px";
//   }
// });

/*::::::::::::: Добавление названия файла:::::::::::::*/
// function addFileName(){
//   var value = $("input[type='file']").val();
//   $('.js-value').text(value);
// };



// $('#datetimepicker1').datetimepicker();
// $('#datetimepicker4').datetimepicker();


// $(function () {
//   $('#datetimepicker1').datetimepicker();
//   $('#datetimepicker5').datetimepicker();
// });
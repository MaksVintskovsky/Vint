
$(document).ready(function(){


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
      }
    }
  });
  $(".views_slider").owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    // center: true,
    // margin: 20,
    
    responsive : {
      0 : {
        items: 2,
        // autoWidth:true
      },
      768 : {
        items: 3,
        // autoWidth:true,
        // margin: 20
      },
      1170 : {
        items: 4,
      }
    },
    navText: ["<img src='img/slider/sliderLeft.png' class='' alt='1'>",
              "<img src='img/slider/sliderRight.png' class='' alt='2'>"]
  });
  $(".card-tabs").owlCarousel({
    loop: false,
    nav: false,
    dots: false,
    autoWidth:true,
    // center: true,
    // margin: 20,
    
    responsive : {
      0 : {
        items: 3,
        // autoWidth:true
      },
      768 : {
        items: 4,
        // autoWidth:true,
        // margin: 20
      },
      1170 : {
        items: 4,
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

  $('.card_slider_top').bxSlider({
    nextText:'',
    prevText:'',
    // pager: false,
    speed: 300,
    pagerCustom: '#bx-pager'
  });
 

  // $('.mob_btn-close').on('click', function(e){
  //   e.preventDefault();
  //   menu.hide();
  //   filter.hide();
  //   bg.hide(100);
  // });

  $(".catalog_tab").click(function() {
    $(".catalog_tab").removeClass("active").eq($(this).index()).addClass("active");
    // $(".tab-content").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");

  // $(document).on('click', function(e){
  //   if(e.target != $('.search')[0] && $('.search').has(e.target).length === 0 ){
  //     $('.search-input').hide();
  //     $('.search button').hide();
  //     $('.search-img').show();
  //   }
  // });

});

// :::::::::::: Filter :::::::::::::
function close_filter(){
  $('.filter_mob').hide();
};
function showFilter() { 
  $(".filter_mob").show();
};
function show_secondary_filter() { 
  $(".filter-section").show();
};
function close_secondary_filter() { 
  $(".filter-section").hide();
};
$('.filter-title').on('click', function(e){
  e.preventDefault();
  $(this).toggleClass('active');
  $(this).next('.filter-section').slideToggle(200); 
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

function toggle_category(){
  $('.menu_category').slideToggle();
};
function close_category(){
  // $('.menu_category').slideDown(200);
  $('.menu_category').fadeOut(200);
};
function show_category(){
  $('.menu_category').show(200);
};
function close_secondary_menu(e){
  // e.preventDefault();
  $('.secondary_menu').fadeOut(200);
};
function show_secondary_menu(e){
  // callPreventDefault();
  $('.catalog_mob .secondary_menu').fadeIn(200);
};
// function callPreventDefault(e){
//   // $('a').preventDefault();
//   e.preventDefault();
// };

// :::::::::::: Catalog View:::::::::::::
function lineView() { 
  $(".catalog_item_wrapper").removeClass("col-6 col-md-4 table_view ").addClass("list_view ");
};
function tableView() { 
  $(".catalog_item_wrapper").removeClass("list_view").addClass("col-6 col-md-4 table_view");
};

// :::::::::::: tab-content :::::::::::::
$(".tab-content").not(":first").hide();
  $(".card-tab-wrapper").click(function() {
    $(".card-tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab-content").hide().eq($(this).index()).fadeIn();
  });
  // .eq(0).addClass("active");
 // :::::::::::: my_button preventDefaul:::::::::::::
// $('.category_item a').on('click', function(e){
//   e.preventDefault()
// })

function show_this_tab(elem) { 
  $(".card-tab").removeClass("active");
  $(elem).addClass("active");
};

// function close_modal_change(e){
//   $('#my_fucking_modal').hide(200);
// };
// function open_modal(event){
//   $('.modal-change').show(200);
// };

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
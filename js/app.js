$(function () {
    //Course Slider
 
    $('.course_slider_container').slick({
       slidesToShow:3
    })
 
    //Calendar Activation
    $("#pb-calendar").pb_calendar({
       'next_month_button':'<i class="fa-solid fa-chevron-up"></i>',
       'prev_month_button':'<i class="fa-solid fa-chevron-down"></i>'
    });
 })
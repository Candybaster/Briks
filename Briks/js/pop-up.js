$(document).ready(function($) {

    $(".open_pop").click(function() {
      $(".pop_up").fadeIn()
      $(".black_wrapper").fadeIn();
    });

    $(".black_wrapper, .close_pop").click(function() {
      $(".pop_up").fadeOut();
      $(".black_wrapper").fadeOut();
    });

    $(".close_pop").click(function() {
        $(".pop_up").fadeOut();
        $(".black_wrapper").fadeOut();
    });

    $(".send_btn").click(function() {
        $(".pop_up").fadeOut();
        $(".black_wrapper").fadeOut();
    });
    
});
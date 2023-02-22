$('.nav-link .dropdown-toggle').mouseover(function(){
    $('.dropdown-menu').addClass('active');
});
$('.nav-link .dropdown-toggle').mouseout(function(){
    $('.dropdown-menu').removeClass('active');
});
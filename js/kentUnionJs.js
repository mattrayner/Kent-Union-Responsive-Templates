$(document).ready(function() {
 
    $("#homepage-carousel").owlCarousel({      
        autoPlay: 5000,
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        responsive: true
    });
      
    var owl = $("#homepage-carousel");    
    
    $("#bannernext").click(function(){
        owl.trigger('owl.next');
    })
    $("#bannerprev").click(function(){
        owl.trigger('owl.prev');
    })
    
    $('.bannerControl').hide();
    $("#main-homepage-images").hover(function() {
        $('.bannerControl').fadeIn('fast'); 
    }, function() {
        $('.bannerControl').fadeOut('fast');
    });
});
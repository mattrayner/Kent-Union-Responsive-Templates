$(document).ready(function() {
 
   // Initialize banner carousel
    $("#homepage-carousel").owlCarousel({      
        autoPlay: 5000,
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        responsive: true
    });
    
    // assign the div to a var to be used later
    var owl = $("#homepage-carousel");    
    
    // Trigger next and previous on click
    $("#bannernext").click(function(){
        owl.trigger('owl.next');
    })
    $("#bannerprev").click(function(){
        owl.trigger('owl.prev');
    })
    
    // Fade the Navigation In and Out on Hover
    $('.bannerControl').hide();
    $("#main-homepage-images").hover(function() {
        $('.bannerControl').fadeIn('fast'); 
    }, function() {
        $('.bannerControl').fadeOut('fast');
    });
    $('#overlay').hide();
    $('.modal').hide();
    $('#greyBar li a').click(function(e){
        $('#greyBar li a').removeClass('greyBar_active');
        $(this).addClass('greyBar_active');
        $('#overlay').fadeIn('fast',function() {
           $('.modal').slideDown('fast');
            e.stopPropagation();
        });
        
    });
    $('#overlay').click( function() {
        $('.modal').slideUp('fast', function() {
            $('#overlay').fadeOut('fast');
            $('#greyBar li a').removeClass('greyBar_active');
        });
    });
    
});
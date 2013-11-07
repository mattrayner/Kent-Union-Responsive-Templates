var modal_campuses = '<div id="panelcontent" class="col-centered panelcontent" style=""> <div class="panelheight"> <div class="grid_left_column"> <div class="intropanel"> <h2 class = "museoTitle">Other Campuses</h2> <p class="museoSmallTitle">Hey, we\'re not just in Canterbury! </p> <p><strong>We have campuses all over the UK and Europe too! Pick the campus you are interested in on the right.</strong></p> </div> </div> <div class="grid_right_column"><a class="close-reveal-modal">×</a><div class="bottom"><ul id="campuses"><li class="clearfix"><a href="http://www.kent.ac.uk/locations/"><img alt="Brussels Campus" src="http://kentunion.co.uk/stylesheet/kentunionresponsivedesign/brussels.png"><p>Satellite sites</p></a></li><li class="clearfix"><a href="http://www.umsa.org.uk/"><img alt="Medway Campus" src="http://kentunion.co.uk/stylesheet/kentunionresponsivedesign/medway.png"><p>Medway</p></a></li><li class="clearfix"><a href="http://www.kentunion.co.uk/"><img alt="Canterbury Campus" src="http://kentunion.co.uk/stylesheet/kentunionresponsivedesign/canterbury.png"><p>Canterbury</p></a></li></ul> </div> </div> </div>  </div>';

var modal_services = '<div id="panelcontent" class="col-centered panelcontent" style=""> <div class="panelheight"> <div class="grid_left_column"> <div class="intropanel"> <h2 class = "museoTitle">Services</h2> <p class="museoSmallTitle">We provide loads of services, not just The Venue &amp; Essentials! </p>  <p class="bold">All of our services are aimed at making your time at Uni better, from the nursery to the advice centre.</p> <p><strong>Whatever you need, we\'ve got your back!</strong></p> </div> </div>  <div class="grid_right_column"><a class="close-reveal-modal">×</a> <div class="bottom"><div class="grid_content_colum"> <ul class="services_links"> <li><a href="http://www.kentunion.co.uk/advice">Advice Centre</a></li> <li><a href="http://www.kentunion.co.uk/services/essentials">Essentials</a></li> <li><a href="http://www.kentunion.co.uk/jobs">Jobshop</a></li> <li><a href="http://www.kentunion.co.uk/services/librarycafe">Library Café</a></li> <li><a href="http://www.oaksdaynursery.co.uk/">Oaks Day Nursery</a></li> <li><a href="http://www.kentunion.co.uk/services/pwessentials">Park Wood Essentials</a></li> </ul></div><div class="grid_content_colum pad"> <ul class="services_links"> <li><a href="http://www.kentunion.co.uk/services/passportphotoservice/">Passport Photo Service</a></li> <li><a href="http://www.kentunion.co.uk/services/post">Postal Service</a></li><li><a href="http://www.kentunion.co.uk/services/printshop">Print Shop</a></li><li><a href="http://www.kentunion.co.uk/societies">Societies</a></li> <li><a href="http://www.kentunion.co.uk/sports">Sports</a></li><li><a href="http://www.kentunion.co.uk/studentmedia">Student Media</a></li> </ul></div><div class="grid_content_colum pad"> <ul class="services_links"> <li><a href="http://www.kentunion.co.uk/thevenue">The Venue</a></li><li><a href="http://www.kentunion.co.uk/unique">Unique</a></li><li><a href="http://www.kentunion.co.uk/volunteering">Volunteering</a></li> <li><a href="http://www.kentunion.co.uk/woodys">Woodys</a></li></ul></div></div></div></div></div>';

var modal_cookies = '<div id="panelcontent" class="col-centered panelcontent" style=""> <div class="panelheight"> <div class="grid_left_column"> <div class="intropanel"> <h2 class = "museoTitle">Cookies</h2> <p class="museoSmallTitle">OMNOMNOMNOM Cookies!</p>  <span id="cookies-picture"></span> </div> </div>  <div class="grid_right_column"><a class="close-reveal-modal">×</a><div class="bottom"><p class="full-notice"><strong>We try our hardest not to track anything you do on our site</strong>. Unfortunately, we kind of have to. </p><p>When you log in and click \'remember me\', that\'s a cookie. When you visit a page on the site we use something called Google Analytics (it tells us what pages you visit the most and information like which web browser you are using). That\'s also a cookie.</p><p> Those are pretty much the main cookies on our site. There are a couple more that pop up when we have facebook intergration or other cool things to make the website better. <strong>We do all of this with the best of intentions but wanted to let you know</strong>.</p><p>For more information about all our privacy and cookies policies <a href="http://kentunion.co.uk/privacy/">click here</a>.</p></div> </div> </div>	 </div>'


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
    
    
    $('#greyBar li a').not('#signin').click(function(e){
            var menuExt = $(this).attr('pointer');
            $('#greyBar li a').removeClass('greyBar_active');
            $(this).addClass('greyBar_active');
            $('#overlay').fadeIn('fast',function() {
               $('.modal').slideDown('fast', function() {
                   $('#modal_OuterContainer').hide().html(eval("modal_" + menuExt)).fadeIn('slow'); 
               });
                e.stopPropagation();
            });
    });

    
    $('#overlay').click( function() {
        $('.modal').slideUp('fast', function() {
            $('#overlay').fadeOut('fast');
            $('#greyBar li a').removeClass('greyBar_active');
            $('#modal_OuterContainer').html('');
        });
    });
    
    $('#modal_OuterContainer').on('click','.close-reveal-modal', function() {
        $('.modal').slideUp('fast', function() {
            $('#overlay').fadeOut('fast');
            $('#greyBar li a').removeClass('greyBar_active');
            $('#modal_OuterContainer').html('');
        });
    });
});
$(document).ready(function(){

	var overviewPlayer1 = document.getElementById("overviewPlayer1");
	var overviewPlayer2 = document.getElementById("overviewPlayer2");
	var overviewPlayer3 = document.getElementById("overviewPlayer3");
	var overviewPlayer4 = document.getElementById("overviewPlayer4");


//// INITIALIZE POSTER SLIDER ON HOMEPAGE ////
  	$('.posters-nav').slick({
	   slidesToShow: 4,
	   slidesToScroll: 1,
	   arrows: false,
	   responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
	   			// focusOnSelect: true
              }
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
              }
            }
       ]
	});

	$('.modal-nav').slick({
		slidesToShow: 4,
	   	slidesToScroll: 1,
	   	dots: false,
	   	arrows: false,
	   	focusOnSelect: true,
 		responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true
              }
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
              }
            }
       ]
	});


//// DEEP LINKING ////
	 if(window.location.href.indexOf('#Used-Car-CPO-Roadside-Assistance') != -1) {

	 	removeActiveThumbnail();
	 	$(".modal-thumbnail-1").addClass("modal-thumbnail-active");
	 	TweenLite.to("#video-1-tabs", .25, {delay: .5, autoAlpha: 1});
	 	$('.modal-nav').slick('slickGoTo', 0);
	 	$("#video-1-tabs").css("display", "block");
	    $('#modal1').modal('show');
		$('[href="#nav-about-2"],[href="#nav-about-3"],[href="#nav-about-4"]').tab('show');
		$(".modal-thumbnail-image-2,.modal-thumbnail-image-3,.modal-thumbnail-image-4").addClass("thumbnail-overlay-inactive");
	  	TweenLite.to("#video-2-tabs,#video-3-tabs,#video-4-tabs", .25, {autoAlpha: 0, display: 'none'});
	  	$("#video-endframe-poster1,#video-endframe-poster2,#video-endframe-poster3,#video-endframe-poster4").css("display", "none");
		var isMobile = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);
		if (isMobile) {
  			console.log("You are using Mobile");
  			video1PlayMobile();
		} else {
			console.log("You are using Desktop");
			video1Play();
		}
		$(".ribbon-1").addClass("ribbon-active");
	  }

	 if(window.location.href.indexOf('#Used-Car-CPO-Inspection') != -1) {
	 	removeActiveThumbnail();
	 	$(".modal-thumbnail-2").addClass("modal-thumbnail-active");
	 	$(".modal-thumbnail-image-1,.modal-thumbnail-image-3,.modal-thumbnail-image-4").addClass("thumbnail-overlay-inactive");
		TweenLite.to("#video-2-tabs", .25, {delay: .5, autoAlpha: 1});
		$('.modal-nav').slick('slickGoTo', 1);
		$("#video-2-tabs").css("display", "block");
	    $('#modal1').modal('show');
	 	$('[href="#nav-about-1"],[href="#nav-about-3"],[href="#nav-about-4"]').tab('show');
	  	$(".modal-thumbnail-2").addClass("modal-thumbnail-active");
	  	TweenLite.to("#video-1-tabs,#video-3-tabs,#video-4-tabs", .25, {autoAlpha: 0, display: 'none'});
	  	$("#video-endframe-poster1,#video-endframe-poster2,#video-endframe-poster3,#video-endframe-poster4").css("display", "none");
		var isMobile = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);
		if (isMobile) {
  			console.log("You are using Mobile");
  			video2PlayMobile();
		} else {
			console.log("You are using Desktop");
			video2Play();
		}
		$(".ribbon-2").addClass("ribbon-active");
	  }

	 if(window.location.href.indexOf('#Used-Car-CPO-Warranties') != -1) {
	 	removeActiveThumbnail();
	 	$(".modal-thumbnail-3").addClass("modal-thumbnail-active");
	 	$(".modal-thumbnail-image-1,.modal-thumbnail-image-2,.modal-thumbnail-image-4").addClass("thumbnail-overlay-inactive");
	    $('#modal1').modal('show');
		$('[href="#nav-about-1"],[href="#nav-about-2"],[href="#nav-about-4"]').tab('show');
		$('.modal-nav').slick('slickGoTo', 2);
	  	$(".modal-thumbnail-3").addClass("modal-thumbnail-active");
	  	$("#video-3-tabs").css("display", "block");
	  	TweenLite.to("#video-1-tabs,#video-2-tabs,#video-3-tabs", .25, {autoAlpha: 0, display: 'none'});
	  	TweenLite.to("#video-3-tabs", .25, {delay: .5, autoAlpha: 1});
	  	$("#video-endframe-poster1,#video-endframe-poster2,#video-endframe-poster3,#video-endframe-poster4").css("display", "none");
		var isMobile = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);
		if (isMobile) {
  			console.log("You are using Mobile");
  			video3PlayMobile();
		} else {
			console.log("You are using Desktop");
			video3Play();
		}
		$(".ribbon-3").addClass("ribbon-active");
	  }

	 if(window.location.href.indexOf('#Used-Car-CPO-Exchange-Policy') != -1) {
	 	removeActiveThumbnail();
	 	$(".modal-thumbnail-4").addClass("modal-thumbnail-active");
	 	$(".modal-thumbnail-image-1,.modal-thumbnail-image-2,.modal-thumbnail-image-3").addClass("thumbnail-overlay-inactive");
	    $('#modal1').modal('show');
		$('[href="#nav-about-1"],[href="#nav-about-2"],[href="#nav-about-3"]').tab('show');
		$('.modal-nav').slick('slickGoTo', 3);
	  	$("#video-4-tabs").css("display", "block");
	  	TweenLite.to("#video-1-tabs,#video-2-tabs,#video-3-tabs", .25, {autoAlpha: 0, display: 'none'});
	  	TweenLite.to("#video-4-tabs", .25, {delay: .5, autoAlpha: 1});
	  	$("#video-endframe-poster1,#video-endframe-poster2,#video-endframe-poster3,#video-endframe-poster4").css("display", "none");
		var isMobile = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);
		if (isMobile) {
  			console.log("You are using Mobile");
  			video4PlayMobile();
		} else {
			console.log("You are using Desktop");
			video4Play();
		}
		$(".ribbon-4").addClass("ribbon-active");
	  }


//// CONTROLS ALL ACTIONS IF POSTER OR MODAL THUMBNAIL IS CLICKED ////
	$(".modal-thumbnail-1,.modal-endframe-1,.poster1Top,.poster1-mobile,.tablet-poster-button-1").click(function(){
		$('[href="#nav-about-1"],[href="#nav-about-2"],[href="#nav-about-3"]').tab('show');
		removeActiveThumbnail();
		$('.modal-nav').slick('slickGoTo', 4);
	  	$(".modal-thumbnail-1").addClass("modal-thumbnail-active");
	  	$("#video-4-tabs").css("display", "block");
	  	TweenLite.to("#video-1-tabs,#video-2-tabs,#video-3-tabs", .25, {autoAlpha: 0, display: 'none'});
	  	TweenLite.to("#video-4-tabs", .25, {delay: .5, autoAlpha: 1});
	  	stopVideos();
	  	$("#video-endframe-poster1,#video-endframe-poster2,#video-endframe-poster3,#video-endframe-poster4").css("display", "none");
		$(".modal-thumbnail-image-4").removeClass("thumbnail-overlay-inactive");
		$(".modal-thumbnail-image-1,.modal-thumbnail-image-2,.modal-thumbnail-image-3").addClass("thumbnail-overlay-inactive");
		$("#modal1").animate({ scrollTop: 0 }, "slow");
		var isMobile = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);
		if (isMobile) {
  			console.log("You are using Mobile");
  			video4PlayMobile();
		} else {
			console.log("You are using Desktop");
			video4Play();
		}
		$(".ribbon-4").addClass("ribbon-active");	
	});
	$(".poster1Button").click(function(){
		$('[href="#nav-about-1"],[href="#nav-about-2"],[href="#nav-about-3"]').tab('show');
		removeActiveThumbnail();
		$('.modal-nav').slick('slickGoTo', 4);
	  	$(".modal-thumbnail-1").addClass("modal-thumbnail-active");
	  	$("#video-4-tabs").css("display", "block");
	  	TweenLite.to("#video-1-tabs,#video-2-tabs,#video-3-tabs", .25, {autoAlpha: 0, display: 'none'});
	  	TweenLite.to("#video-4-tabs", .25, {delay: .5, autoAlpha: 1});
	  	stopVideos();
	  	$("#video-endframe-poster1,#video-endframe-poster2,#video-endframe-poster3,#video-endframe-poster4").css("display", "none");
		$(".modal-thumbnail-image-4").removeClass("thumbnail-overlay-inactive");
		$(".modal-thumbnail-image-1,.modal-thumbnail-image-2,.modal-thumbnail-image-3").addClass("thumbnail-overlay-inactive");
		$("#modal1").animate({ scrollTop: 1000 }, "slow");
		var isMobile = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);
		if (isMobile) {
  			console.log("You are using Mobile");
  			video4MobileLoad();
		} else {
			console.log("You are using Desktop");
			video4Load();
		}	
		$(".ribbon-4").addClass("ribbon-active");
	});


	$(".modal-thumbnail-2,.modal-endframe-2,.poster2Top,.poster2-mobile,.tablet-poster-button-2").click(function(){
		$('[href="#nav-about-1"],[href="#nav-about-3"],[href="#nav-about-4"]').tab('show');
		removeActiveThumbnail();
		$('.modal-nav').slick('slickGoTo', 1);
	  	$(".modal-thumbnail-2").addClass("modal-thumbnail-active");
	  	$("#video-2-tabs").css("display", "block");
	  	TweenLite.to("#video-1-tabs,#video-3-tabs,#video-4-tabs", .25, {autoAlpha: 0, display: 'none'});
	  	TweenLite.to("#video-2-tabs", .25, {delay: .5, autoAlpha: 1});
	  	stopVideos();
	  	$("#video-endframe-poster1,#video-endframe-poster2,#video-endframe-poster3,#video-endframe-poster4").css("display", "none");
		$(".modal-thumbnail-image-2").removeClass("thumbnail-overlay-inactive");
		$(".modal-thumbnail-image-1,.modal-thumbnail-image-3,.modal-thumbnail-image-4").addClass("thumbnail-overlay-inactive");
		$("#modal1").animate({ scrollTop: 0 }, "slow");
		var isMobile = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);
		if (isMobile) {
  			console.log("You are using Mobile");
  			video2PlayMobile();
		} else {
			console.log("You are using Desktop");
			video2Play();
		}
		$(".ribbon-2").addClass("ribbon-active");
	});
	$(".poster2Button").click(function(){
		$('[href="#nav-about-1"],[href="#nav-about-3"],[href="#nav-about-4"]').tab('show');
		removeActiveThumbnail();
		$('.modal-nav').slick('slickGoTo', 1);
	  	$(".modal-thumbnail-2").addClass("modal-thumbnail-active");
	  	$("#video-2-tabs").css("display", "block");
	  	TweenLite.to("#video-1-tabs,#video-3-tabs,#video-4-tabs", .25, {autoAlpha: 0, display: 'none'});
	  	TweenLite.to("#video-2-tabs", .25, {delay: .5, autoAlpha: 1});
	  	stopVideos();
	  	$("#video-endframe-poster1,#video-endframe-poster2,#video-endframe-poster3,#video-endframe-poster4").css("display", "none");
		$(".modal-thumbnail-image-2").removeClass("thumbnail-overlay-inactive");
		$(".modal-thumbnail-image-1,.modal-thumbnail-image-3,.modal-thumbnail-image-4").addClass("thumbnail-overlay-inactive");
		$("#modal1").animate({ scrollTop: 1000 }, "slow");
		var isMobile = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);
		if (isMobile) {
  			console.log("You are using Mobile");
  			video2MobileLoad();
		} else {
			console.log("You are using Desktop");
			video2Load();
		}
		$(".ribbon-2").addClass("ribbon-active");
	});


	$(".modal-thumbnail-3,.modal-endframe-3,.poster3Top,.poster3-mobile,.tablet-poster-button-3").click(function(){
		$('[href="#nav-about-1"],[href="#nav-about-2"],[href="#nav-about-4"]').tab('show');
		removeActiveThumbnail();
		$('.modal-nav').slick('slickGoTo', 2);
	  	$(".modal-thumbnail-3").addClass("modal-thumbnail-active");
	  	$("#video-3-tabs").css("display", "block");
	  	TweenLite.to("#video-1-tabs,#video-2-tabs,#video-4-tabs", .25, {autoAlpha: 0, display: 'none'});
	  	TweenLite.to("#video-3-tabs", .25, {delay: .5, autoAlpha: 1});
	  	stopVideos();
	  	$("#video-endframe-poster1,#video-endframe-poster2,#video-endframe-poster3,#video-endframe-poster4").css("display", "none");
		$(".modal-thumbnail-image-3").removeClass("thumbnail-overlay-inactive");
		$(".modal-thumbnail-image-1,.modal-thumbnail-image-2,.modal-thumbnail-image-4").addClass("thumbnail-overlay-inactive");
		$("#modal1").animate({ scrollTop: 0 }, "slow");
		var isMobile = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);
		if (isMobile) {
  			console.log("You are using Mobile");
  			video3PlayMobile();
		} else {
			console.log("You are using Desktop");
			video3Play();
		}
		$(".ribbon-3").addClass("ribbon-active");
	});
	$(".poster3Button").click(function(){
		$('[href="#nav-about-1"],[href="#nav-about-2"],[href="#nav-about-4"]').tab('show');
		removeActiveThumbnail();
		$('.modal-nav').slick('slickGoTo', 2);
	  	$(".modal-thumbnail-3").addClass("modal-thumbnail-active");
	  	$("#video-3-tabs").css("display", "block");
	  	TweenLite.to("#video-1-tabs,#video-2-tabs,#video-4-tabs", .25, {autoAlpha: 0, display: 'none'});
	  	TweenLite.to("#video-3-tabs", .25, {delay: .5, autoAlpha: 1});
	  	stopVideos();
	  	$("#video-endframe-poster1,#video-endframe-poster2,#video-endframe-poster3,#video-endframe-poster4").css("display", "none");
		$(".modal-thumbnail-image-3").removeClass("thumbnail-overlay-inactive");
		$(".modal-thumbnail-image-1,.modal-thumbnail-image-2,.modal-thumbnail-image-4").addClass("thumbnail-overlay-inactive");
		$("#modal1").animate({ scrollTop: 1000 }, "slow");
		var isMobile = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);
		if (isMobile) {
  			console.log("You are using Mobile");
  			video3MobileLoad();
		} else {
			console.log("You are using Desktop");
			video3Load();
		}
		$(".ribbon-3").addClass("ribbon-active");
	});


	$(".modal-thumbnail-4,.modal-endframe-4,.poster4Top,.poster4-mobile,.tablet-poster-button-4").click(function(){
		$('[href="#nav-about-2"],[href="#nav-about-3"],[href="#nav-about-4"]').tab('show');
		removeActiveThumbnail();
		$('.modal-nav').slick('slickGoTo', 3);
	  	$(".modal-thumbnail-4").addClass("modal-thumbnail-active");
	  	$("#video-1-tabs").css("display", "block");
	  	TweenLite.to("#video-1-tabs", .25, {delay: .5, autoAlpha: 1});
	  	TweenLite.to("#video-2-tabs,#video-3-tabs,#video-4-tabs", .25, {autoAlpha: 0, display: 'none'});
	  	stopVideos();
	  	$("#video-endframe-poster1,#video-endframe-poster2,#video-endframe-poster3,#video-endframe-poster4").css("display", "none");
		$(".modal-thumbnail-image-1").removeClass("thumbnail-overlay-inactive");
		$(".modal-thumbnail-image-2,.modal-thumbnail-image-3,.modal-thumbnail-image-4").addClass("thumbnail-overlay-inactive");
		$("#modal1").animate({ scrollTop: 0 }, "slow");
		var isMobile = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);
		if (isMobile) {
  			console.log("You are using Mobile");
  			video1PlayMobile();
		} else {
			console.log("You are using Desktop");
			video1Play();
		}
		$(".ribbon-1").addClass("ribbon-active");	
	});
	$(".poster4Button").click(function(){
		$("#modal1").animate({ scrollTop: 1000 }, "slow");
		$('[href="#nav-about-2"],[href="#nav-about-3"],[href="#nav-about-4"]').tab('show');
		removeActiveThumbnail();
		$('.modal-nav').slick('slickGoTo', 3);
	  	$(".modal-thumbnail-4").addClass("modal-thumbnail-active");
	  	$("#video-1-tabs").css("display", "block");
	  	TweenLite.to("#video-1-tabs", .25, {delay: .5, autoAlpha: 1});
	  	TweenLite.to("#video-2-tabs,#video-3-tabs,#video-4-tabs", .25, {autoAlpha: 0, display: 'none'});
	  	stopVideos();
	  	$("#video-endframe-poster1,#video-endframe-poster2,#video-endframe-poster3,#video-endframe-poster4").css("display", "none");
		$(".modal-thumbnail-image-1").removeClass("thumbnail-overlay-inactive");
		$(".modal-thumbnail-image-2,.modal-thumbnail-image-3,.modal-thumbnail-image-4").addClass("thumbnail-overlay-inactive");
		var isMobile = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent);
		if (isMobile) {
  			console.log("You are using Mobile");
  			video1MobileLoad();
		} else {
			console.log("You are using Desktop");
			video1Load();
		}
		$(".ribbon-1").addClass("ribbon-active");
	});


/////// PLAY VIDEOS /////////
	function video1Play() {
		$("#video1").css("display", "block");
		document.getElementById('video1-source').src = 'videos/super-fresh-granny.mp4';
		document.getElementById("video1").load();
	}
	function video1PlayMobile() {
		$("#video1Mobile").css("display", "block");
		document.getElementById('video1Mobile-source').src = 'videos/super-fresh-granny-mobile.mp4';
		document.getElementById("video1Mobile").load();
	}
	function video1Load() {
		$("#video1").css("display", "block");
		document.getElementById('video1-source').src = 'videos/super-fresh-granny.mp4';
		document.getElementById("video1").load();
		video1.pause();
	}
	function video1MobileLoad() {
		$("#video1Mobile").css("display", "block");
		document.getElementById('video1Mobile-source').src = 'videos/super-fresh-granny-mobile.mp4';
		document.getElementById("video1Mobile").load();
		video1Mobile.pause();
	}
	function video2Play() {
		$("#video2").css("display", "block");
		document.getElementById('video2-source').src = 'videos/commuters.mp4';
		document.getElementById("video2").load();
	}
	function video2PlayMobile() {
		$("#video2Mobile").css("display", "block");
		document.getElementById('video2Mobile-source').src = 'videos/commuters-mobile.mp4';
		document.getElementById("video2Mobile").load();
	}
	function video2Load() {
		$("#video2").css("display", "block");
		document.getElementById('video2-source').src = 'videos/commuters.mp4';
		document.getElementById("video2").load();
		video2.pause();
	}
	function video2MobileLoad() {
		$("#video2Mobile").css("display", "block");
		document.getElementById('video2Mobile-source').src = 'videos/commuters-mobile.mp4';
		document.getElementById("video2Mobile").load();
		video2Mobile.pause();
	}
	function video3Play() {
		$("#video3").css("display", "block");
		document.getElementById('video3-source').src = 'videos/hidden-camera.mp4';
		document.getElementById("video3").load();
	}
	function video3PlayMobile() {
		$("#video3Mobile").css("display", "block");
		document.getElementById('video3Mobile-source').src = 'videos/hidden-camera-mobile.mp4';
		document.getElementById("video3Mobile").load();
	}
	function video3Load() {
		$("#video3").css("display", "block");
		document.getElementById('video3-source').src = 'os/hidden-camera.mp4vide';
		document.getElementById("video3").load();
		video3.pause();
	}
	function video3MobileLoad() {
		$("#video3Mobile").css("display", "block");
		document.getElementById('video3Mobile-source').src = 'videos/hidden-camera-mobile.mp4';
		document.getElementById("video3Mobile").load();
		video3Mobile.pause();
	}
	function video4Play() {
		$("#video4").css("display", "block");
		document.getElementById('video4-source').src = 'videos/blue.mp4';
		document.getElementById("video4").load();
	}
	function video4PlayMobile() {
		$("#video4Mobile").css("display", "block");
		document.getElementById('video4Mobile-source').src = 'videos/blue-mobile.mp4';
		document.getElementById("video4Mobile").load();
	}
	function video4Load() {
		$("#video4").css("display", "block");
		document.getElementById('video4-source').src = 'videos/blue.mp4';
		document.getElementById("video4").load();
		video4.pause();
	}
	function video4MobileLoad() {
		$("#video4Mobile").css("display", "block");
		document.getElementById('video4Mobile-source').src = 'videos/blue-mobile.mp4';
		document.getElementById("video4Mobile").load();
		video4Mobile.pause();
	}

/////// PLAY ENDED /////////
	video1.onended = function() {
		$("#video-endframe-poster4").css("display", "block");
	};
	video2.onended = function() {
		$("#video-endframe-poster2").css("display", "block");
	};
	video3.onended = function() {
		$("#video-endframe-poster3").css("display", "block");
	};
	video4.onended = function() {
		$("#video-endframe-poster1").css("display", "block");
	};

///// TOGGLES THAT STOPS MAIN VIDEOS WHEN OVERVIEW VIDEOS PLAY /////
	overviewPlayer1.onplay = function() {
	 	video1.pause();
	 	video1Mobile.pause();
	};
	overviewPlayer2.onplay = function() {
	 	video2.pause();
	 	video2Mobile.pause();
	};
	overviewPlayer3.onplay = function() {
	 	video3.pause();
	 	video3Mobile.pause();
	};
	overviewPlayer4.onplay = function() {
	 	video4.pause();
	 	video4Mobile.pause();
	};
	video1.onplay = function() {
	 	overviewPlayer1.pause();
	};
	video2.onplay = function() {
	 	overviewPlayer2.pause();
	};
	video3.onplay = function() {
	 	overviewPlayer3.pause();
	};
	video4.onplay = function() {
	 	overviewPlayer4.pause();
	};
	video1Mobile.onplay = function() {
	 	overviewPlayer1.pause();
	};
	video2Mobile.onplay = function() {
	 	overviewPlayer2.pause();
	};
	video3Mobile.onplay = function() {
	 	overviewPlayer3.pause();
	};
	video4Mobile.onplay = function() {
	 	overviewPlayer4.pause();
	};

///// LEARN MORE BUTTON ON VIDEO IN MODAL /////
	$(".image-learn").click(function(){
		$("#modal1").animate({ scrollTop: 1000 }, "slow");
		TweenLite.to(".video-learn-more-wrapper", .25, {autoAlpha: 0});
	});
	$(".poster1Top,.poster2Top,.poster3Top,.poster4Top").click(function(){
		TweenLite.to(".video-learn-more-wrapper", 0, {autoAlpha: 1});
	  	TweenLite.to(".video-learn-more-wrapper", .25, {delay:15, autoAlpha: 0});
	});



///// ANIMATES ON CORRECT TAB IN MODAL /////
	$(".poster1-mobile").click(function(){
	  	TweenLite.to("#video-1-mobile-tabs", .25, {autoAlpha: 1});
	});
	$(".poster2-mobile").click(function(){
	  	TweenLite.to("#video-2-mobile-tabs", .25, {autoAlpha: 1});
	});
	$(".poster3-mobile").click(function(){
	  	TweenLite.to("#video-3-mobile-tabs", .25, {autoAlpha: 1});
	});
	$(".poster4-mobile").click(function(){
	  	TweenLite.to("#video-4-mobile-tabs", .25, {autoAlpha: 1});
	});

	function removeActiveThumbnail() {
	  	$(".modal-thumbnail-1,.modal-thumbnail-2,.modal-thumbnail-3,.modal-thumbnail-4").removeClass("modal-thumbnail-active");
	  	TweenLite.to("#video-1-tabs,#video-2-tabs,#video-3-tabs,#video-4-tabs", .25, {autoAlpha: 0});
	  	$(".ribbon-1,.ribbon-2,.ribbon-3,.ribbon-4").removeClass("ribbon-active");
	}

///// ADDS HOVER EFFECTS TO MODAL THUMBNAIL NAV /////
	$(".modal-thumbnail-1").mouseenter(function(){
		if ($(".modal-thumbnail-image-4").hasClass("thumbnail-overlay-inactive")) {
			$(".modal-thumbnail-image-4").addClass("thumbnail-overlay-hover");
			$(".play-button-4").addClass("play-button-hover");
    	};
	});
	$(".modal-thumbnail-1").mouseleave(function(){
 		if ($(".modal-thumbnail-image-4").hasClass("thumbnail-overlay-hover")) {
			$(".modal-thumbnail-image-4").removeClass("thumbnail-overlay-hover");
			$(".play-button-4").removeClass("play-button-hover");
    	};   	
	});
	$(".modal-thumbnail-2").mouseenter(function(){
		if ($(".modal-thumbnail-image-2").hasClass("thumbnail-overlay-inactive")) {
			$(".modal-thumbnail-image-2").addClass("thumbnail-overlay-hover");
			$(".play-button-2").addClass("play-button-hover");
    	};
	});
	$(".modal-thumbnail-2").mouseleave(function(){
		if ($(".modal-thumbnail-image-2").hasClass("thumbnail-overlay-hover")) {
			$(".modal-thumbnail-image-2").removeClass("thumbnail-overlay-hover");
			$(".play-button-2").removeClass("play-button-hover");
    	};
	});
	$(".modal-thumbnail-3").mouseenter(function(){
		if ($(".modal-thumbnail-image-3").hasClass("thumbnail-overlay-inactive")) {
			$(".modal-thumbnail-image-3").addClass("thumbnail-overlay-hover");
			$(".play-button-3").addClass("play-button-hover");
    	};
	});
	$(".modal-thumbnail-3").mouseleave(function(){
		if ($(".modal-thumbnail-image-3").hasClass("thumbnail-overlay-hover")) {
			$(".modal-thumbnail-image-3").removeClass("thumbnail-overlay-hover");
			$(".play-button-3").removeClass("play-button-hover");
    	};
	});
	$(".modal-thumbnail-4").mouseenter(function(){
		if ($(".modal-thumbnail-image-1").hasClass("thumbnail-overlay-inactive")) {
			$(".modal-thumbnail-image-1").addClass("thumbnail-overlay-hover");
			$(".play-button-1").addClass("play-button-hover");
    	};
	});
	$(".modal-thumbnail-4").mouseleave(function(){
		if ($(".modal-thumbnail-image-1").hasClass("thumbnail-overlay-hover")) {
			$(".modal-thumbnail-image-1").removeClass("thumbnail-overlay-hover");
			$(".play-button-1").removeClass("play-button-hover");
    	};
	});

///// MODAL CLOSE BUTTONS THAT RESET EVERYTHING./////
///// MODAL HIDDEN REFRESHES SLICK SLIDER SO THAT /////
///// CHANGING ORIENTATION DOESNT BREAK SLIDER /////
	$('#modal1').on('hidden.bs.modal', function (e) {
	  	$('.posters-nav')[0].slick.refresh();
	  	stopVideos();
	  	TweenLite.to("#video-1-tabs,#video-2-tabs,#video-3-tabs,#video-4-tabs", 0, {autoAlpha: 0});
		$('[href="#nav-about-1"],[href="#nav-about-2"],[href="#nav-about-3"],[href="#nav-about-4"]').tab('show');
		$("#video-1-tabs,#video-2-tabs,#video-3-tabs,#video-4-tabs").css("display", "none");
		$("#video-endframe-poster1,#video-endframe-poster2,#video-endframe-poster3,#video-endframe-poster4").css("display", "none");
		$('.closeDisclaimer').trigger('click');
		$(".modal-thumbnail-image-1,.modal-thumbnail-image-2,.modal-thumbnail-image-3,.modal-thumbnail-image-4").removeClass("thumbnail-overlay-inactive");
		$("#video1,#video2,#video3,#video4").css("display", "none");
		$(".ribbon-1,.ribbon-2,.ribbon-3,.ribbon-4").removeClass("ribbon-active");
	})
	$('#modal1').on('shown.bs.modal', function (e) {
	  $('.posters-nav')[0].slick.refresh();
	  TweenMax.to(".poster1Top", .25, {ease: Circ.easeIn, yPercent:0});
	  TweenMax.to(".poster1Bottom", .25, {ease: Circ.easeIn, yPercent:0}, 0);
	  TweenMax.to(".poster2Top", .25, {ease: Circ.easeIn, yPercent:0});
	  TweenMax.to(".poster2Bottom", .25, {ease: Circ.easeIn, yPercent:0}, 0);
	})


//// STOPS ALL VIDEOS WHEN MODAL CLOSES ////
    function stopVideos(event) {
    	console.log("VIDEOS STOPPED");
    	$("#video1,#video2,#video3,#video4,#video1Mobile,#video2Mobile,#video3Mobile,#video4Mobile").css("display", "none");
		document.getElementById('video1-source').src = '';
		document.getElementById("video1").load();
		document.getElementById('video2-source').src = '';
		document.getElementById("video2").load();
		document.getElementById('video3-source').src = '';
		document.getElementById("video3").load();
		document.getElementById('video4-source').src = '';
		document.getElementById("video4").load();
		document.getElementById('video1Mobile-source').src = '';
		document.getElementById("video1Mobile").load();
		document.getElementById('video2Mobile-source').src = '';
		document.getElementById("video2Mobile").load();
		document.getElementById('video3Mobile-source').src = '';
		document.getElementById("video3Mobile").load();
		document.getElementById('video4Mobile-source').src = '';
		document.getElementById("video4Mobile").load();
       	overviewPlayer1.pause(); 
        overviewPlayer1.currentTime = 0;
       	overviewPlayer2.pause(); 
        overviewPlayer2.currentTime = 0;
       	overviewPlayer3.pause(); 
        overviewPlayer3.currentTime = 0;
       	overviewPlayer4.pause(); 
        overviewPlayer4.currentTime = 0;
        overviewPlayerHome.pause(); 
        overviewPlayerHome.currentTime = 0;
    }

	$(".nav-offers-tab, .nav-about-tab").click(function(){
	    overviewPlayer1.pause(); 
	    overviewPlayer1.currentTime = 0;
	   	overviewPlayer2.pause(); 
	    overviewPlayer2.currentTime = 0;
	   	overviewPlayer3.pause(); 
	    overviewPlayer3.currentTime = 0;
	   	overviewPlayer4.pause(); 
	    overviewPlayer4.currentTime = 0;
	});

	$(".nav-offers-tab, .nav-overview-tab, .nav-about-tab, .modal-thumbnail-1, .modal-thumbnail-2, .modal-thumbnail-3, .modal-thumbnail-4").click(function(){
		$('.closeDisclaimer').trigger('click');
	});


//// OVERVIEW PLAYER HOMEPAGE ////
var overviewPlayerPosterHomepage = $('#overviewPlayerPoster');
	overviewPlayerPosterHomepage.on("click", function(){
	  	$("#overviewPlayerPoster").css("display", "none");
	  	$("#overviewPlayerHome").css("display", "block");
		document.getElementById('overviewHome-source').src = 'https://video2.marketing.gm.com/media/v1/pmp4/static/clear/6012566860001/0f48ce65-0779-46ea-9dd3-d81575e317bc/255c127e-67bf-4647-9f03-20414ed4a648/main.mp4';
		document.getElementById("overviewPlayerHome").load();
		overviewPlayerHome.play(); 
	});



//// GSAP ANIMATIONS FOR POSTERS ON HOMEPAGE ////
 	var poster1 = $('.poster1');
		poster1.on("mouseenter", function(){
	  	TweenMax.to(".poster1Top", .25, {ease: Circ.easeOut, yPercent:100});
	  	TweenMax.to(".poster1Bottom", .25, {ease: Circ.easeOut, yPercent:-100}, 0);
	});
	poster1.on("mouseleave", function(){
	  	TweenMax.to(".poster1Top", .25, {ease: Circ.easeIn, yPercent:0});
	  	TweenMax.to(".poster1Bottom", .25, {ease: Circ.easeIn, yPercent:0}, 0);
	});

	var poster2 = $('.poster2');
		poster2.on("mouseenter", function(){
	  	TweenMax.to(".poster2Top", .25, {ease: Circ.easeOut, yPercent:100});
	  	TweenMax.to(".poster2Bottom", .25, {ease: Circ.easeOut, yPercent:-100}, 0);
	});
	poster2.on("mouseleave", function(){
	  	TweenMax.to(".poster2Top", .25, {ease: Circ.easeIn, yPercent:0});
	  	TweenMax.to(".poster2Bottom", .25, {ease: Circ.easeIn, yPercent:0}, 0);
	});

	var poster3 = $('.poster3');
		poster3.on("mouseenter", function(){
	  	TweenMax.to(".poster3Top", .25, {ease: Circ.easeOut, yPercent:100});
	  	TweenMax.to(".poster3Bottom", .25, {ease: Circ.easeOut, yPercent:-100}, 0);
	});
	poster3.on("mouseleave", function(){
	  	TweenMax.to(".poster3Top", .25, {ease: Circ.easeIn, yPercent:0});
	  	TweenMax.to(".poster3Bottom", .25, {ease: Circ.easeIn, yPercent:0}, 0);
	});

	var poster4 = $('.poster4');
		poster4.on("mouseenter", function(){
	  	TweenMax.to(".poster4Top", .25, {ease: Circ.easeOut, yPercent:100});
	  	TweenMax.to(".poster4Bottom", .25, {ease: Circ.easeOut, yPercent:-100}, 0);
	});
	poster4.on("mouseleave", function(){
	  	TweenMax.to(".poster4Top", .25, {ease: Circ.easeIn, yPercent:0});
	  	TweenMax.to(".poster4Bottom", .25, {ease: Circ.easeIn, yPercent:0}, 0);
	});


//// DISCLAIMER ANIMATIONS ////
	$(".assistance").click(function(){
        $('.transformAssistance').addClass('transform-active')
    });

	$(".apr").click(function(){
        $('.transformApr').addClass('transform-active')
    });
    $(".miles").click(function(){
        $('.transformMiles').addClass('transform-active')
        $('.transformWarranty,.transformTransportation').removeClass('transform-active')
    });
    $(".warranty").click(function(){
        $('.transformWarranty').addClass('transform-active')
        $('.transformMiles,.transformTransportation').removeClass('transform-active')
    });
    $(".transportation").click(function(){
    	$('.transformMiles,.transformWarranty').removeClass('transform-active')
        $('.transformTransportation').addClass('transform-active')
    });
    $(".exchange").click(function(){
        $('.transformExchange').addClass('transform-active')
    });
    $(".closeDisclaimer").click(function(){
        $('.transformAssistance,.transformApr,.transformMiles,.transformWarranty,.transformTransportation,.transformExchange').removeClass('transform-active')
    });

// STOPS PAGE FROM SCROLLING BEHIND MODAL ON IOS
	$('.modal').on('shown.bs.modal', function (e) {
	  	$('html').addClass('freezePage'); 
	  	$('body').addClass('freezePage');
	});
	$('.modal').on('hidden.bs.modal', function (e) {
	  	$('html').removeClass('freezePage');
	  	$('body').removeClass('freezePage');
	});

});


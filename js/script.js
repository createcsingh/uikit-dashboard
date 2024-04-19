
	
	
	var bar = document.getElementById('js-progressbar');
    UIkit.upload('.js-upload', {
        url: '',
        multiple: true,

        beforeSend: function () {
            console.log('beforeSend', arguments);
        },
        beforeAll: function () {
            console.log('beforeAll', arguments);
        },
        load: function () {
            console.log('load', arguments);
        },
        error: function () {
            console.log('error', arguments);
        },
        complete: function () {
            console.log('complete', arguments);
        },

        loadStart: function (e) {
            console.log('loadStart', arguments);

            bar.removeAttribute('hidden');
            bar.max = e.total;
            bar.value = e.loaded;
        },

        progress: function (e) {
            console.log('progress', arguments);

            bar.max = e.total;
            bar.value = e.loaded;
        },

        loadEnd: function (e) {
            console.log('loadEnd', arguments);

            bar.max = e.total;
            bar.value = e.loaded;
        },

        completeAll: function () {
            console.log('completeAll', arguments);

            setTimeout(function () {
                bar.setAttribute('hidden', 'hidden');
            }, 1000);

            alert('Upload Completed');
        }

    });

$(function() {
    // Sidebar Toggler
    function sidebarToggle(toogle) {
        var sidebar = $('#sidebar');
        var padder = $('.content-padder');
        if( toogle ) {
            $('.notyf').removeAttr( 'style' );
            sidebar.css({'display': 'block', 'x': -300});
            sidebar.transition({opacity: 1, x: 0}, 250, 'in-out', function(){
                sidebar.css('display', 'block');
            });
            if( $( window ).width() > 960 ) {
                padder.transition({marginLeft: sidebar.css('width')}, 250, 'in-out');
            }
        } else {
            $('.notyf').css({width: '90%', margin: '0 auto', display:'block', right: 0, left: 0});
            sidebar.css({'display': 'block', 'x': '0px'});
            sidebar.transition({x: -300, opacity: 0}, 250, 'in-out', function(){
                sidebar.css('display', 'none');
            });
            padder.transition({marginLeft: 0}, 250, 'in-out');
        }
    }

    $('#sidebar_toggle').click(function() {
        var sidebar = $('#sidebar');
        var padder = $('.content-padder');
        if( sidebar.css('x') == '-300px' || sidebar.css('display') == 'none' ) {
            sidebarToggle(true)
        } else {
            sidebarToggle(false)
        }
    });

    function resize()
    {
        var sidebar = $('#sidebar');
        var padder = $('.content-padder');
		padder.removeAttr( 'style' );
		if( $( window ).width() < 960 && sidebar.css('display') == 'block' ) {
			sidebarToggle(false);
		} else if( $( window ).width() > 960 && sidebar.css('display') == 'none' ) {
			sidebarToggle(true);
		}
    }

    if($( window ).width() < 960) {
								//alert();
        sidebarToggle(false);
    }

	$( window ).resize(function() {
		resize()
	});

    $('.content-padder').click(function(event) {
/*         if( $( window ).width() < 960 ) {
            sidebarToggle(false);
        }  */
		if( $( window ).width() < 960 ) {
			if (!$(event.target).closest('#sidebar_toggle').length) {
				sidebarToggle(false);
			}
		}
    });
})

$(document).ready(function() {
	if($('#datable').length){
		var oTable = $('#datable').DataTable({
			"bJQueryUI": true,
			"sDom": 'lfrtip',
			"lengthChange": false
		});
	}	
	
	$('.uk-search-input').keyup(function(){
		oTable.search($(this).val()).draw();
	})
});

 	const preloader = document.querySelector('.preloader');
	console.log(preloader);
	function fadeEffect(){
		setInterval(() => {
		  // if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
		  if (!preloader.style.opacity) {
			preloader.style.opacity = 1;
		  }
		  if (preloader.style.opacity > 0) {
			preloader.style.opacity -= 0.1;
		  } else {
			clearInterval(fadeEffect);
			preloader.style.display = "none";
		  }
		}, 20); 
	}

	window.addEventListener('load', fadeEffect); 
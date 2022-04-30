var header           = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content          = document.getElementById('content');
var sl          = document.getElementById('sl');
var showSidebar      = false;


    function toggleSidebar()
    {
        showSidebar = !showSidebar;
        if(showSidebar)
        {
            navigationHeader.style.marginLeft = '-10vw';
            navigationHeader.style.animationName = 'showSidebar';
            content.style.filter = 'blur(4px)';
            sl.style.filter = 'blur(4px)';
            document.querySelector('body').style.overflowY='hidden';
        }
        else
        {
            navigationHeader.style.marginLeft = '-100vw';
            navigationHeader.style.animationName = '';
            content.style.filter = '';
            sl.style.filter = '';
            document.querySelector('body').style.overflowY='unset';
        }
    }

    function closeSidebar()
    {
        if(showSidebar)
        {
            toggleSidebar();
        }
    }

    window.addEventListener('resize', function(event) {
        if(window.innerWidth > 768 && showSidebar) 
        {  
            showSidebar = true;
            toggleSidebar();
        }
    });
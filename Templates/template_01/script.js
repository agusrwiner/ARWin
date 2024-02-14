const burger = document.querySelector( '.burger' );
const nav_ul = document.querySelector( '.nav-ul' );
const nav_ul_li = document.querySelectorAll( ".nav-ul-li" );
const exitModal = document.querySelector( '.exitModal' );

const displayNav = ()=>{
    //activates 'burger' animation
    burger.classList.toggle( 'burger-active' );
    
   //activates 'nav-ul' animation
    nav_ul.classList.toggle( 'nav-active' );

    //fade efect for each 'nav-ul-li'
    nav_ul_li.forEach( (link,index) => {
        if ( link.style.animation ) {
            link.style.animation = ``;
        }else{
            link.style.animation = `linksFadeIn 500ms ease-out forwards ${index / 7 + .5}s`;
        }
    });

    exitModal.classList.toggle( "exitModal-active" );

    if ( nav_ul.getAttribute( "aria-expanded" ) === "true" ) {
        nav_ul.setAttribute( "aria-expanded","false" );
    }else if( nav_ul.getAttribute( "aria-expanded" ) === "false" ) {
        nav_ul.setAttribute( "aria-expanded","true" );
    }
}

burger.addEventListener( "click",displayNav );
exitModal.addEventListener( "click",displayNav );
nav_ul.addEventListener( "click",(e) => {
    if ( nav_ul.getAttribute( "aria-expanded" ) === "true"  && !e.target.matches( ".nav-ul-li-a" ) && !e.target.matches( ".nav-ul-li" ) ) {
        displayNav();
    }
});

/* API google maps */
function launchMap(){
    var coords = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coords
    });
    var marker = new google.maps.Marker({
        position: coords,
        map: map
    });
}
/* FIN API google maps */
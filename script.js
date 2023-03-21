var controller = new ScrollMagic.Controller();

var Scene = new ScrollMagic.Scene({
    triggerElement: '#fade'
})


.setClassToggle('#fade', 'fade-in')
.addTo(controller)
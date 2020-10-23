<script>
var x = 0;
var i;
var slide = document.getElementsByClassName("slide-container");
function rightslide() {
    If (x > -50) {
        x-=104; 
        for (i = 0; i < 2; i++) {
            slide[i].style.transform = "translate("+x+"%,0)";
        }
    }
}
function leftslide() {
    If (x < 0) {
        x+=50;
        for (i = 0; i < 2; i++) {
            slide[i].style.transform = "translate("+x+"%,0)";
        }
    }
}
</script> 
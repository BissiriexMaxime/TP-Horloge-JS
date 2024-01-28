function move()
    {
        let aiguilleSeconds = document.querySelector("#seconds");
        let aiguilleMinutes = document.querySelector("#minutes");
        let aiguilleHours = document.querySelector("#hours");

        let maDate = new Date();
        let valeurseconds = maDate.getSeconds();
        let valeurminutes = maDate.getMinutes();
        let valeurhours = maDate.getHours();

        console.log(valeurseconds);
        console.log(valeurminutes);
        console.log(valeurhours);

        aiguilleSeconds.style.transform = "rotate(" + ((valeurseconds*6)-90) + "deg)";
        aiguilleMinutes.style.transform = "rotate(" + ((valeurminutes*6)-90) + "deg)";
        aiguilleHours.style.transform = "rotate(" + ((valeurhours*30)-90) + "deg)";
    }

    window.setInterval(move, 1000);
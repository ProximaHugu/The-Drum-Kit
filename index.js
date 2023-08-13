
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        playSound(this.innerHTML);
        animationButton(this.innerHTML);
        
    });
}
        function playSound(keyString) {
            switch (keyString) {
                case "w":
                    var audio = new Audio("D:\\Radnom\\WebDevelopment\\Unit18_Drum_Kit_Project\\Drum Kit Starting Files\\sounds\\tom-1.mp3");
                    audio.play();
                    
                    break;
                case "a":
                    var audio = new Audio("D:\\Radnom\\WebDevelopment\\Unit18_Drum_Kit_Project\\Drum Kit Starting Files\\sounds\\tom-2.mp3");
                    audio.play();
                    break;

                case "s":
                    var audio = new Audio("D:\\Radnom\\WebDevelopment\\Unit18_Drum_Kit_Project\\Drum Kit Starting Files\\sounds\\tom-3.mp3");
                    audio.play();
                    break;

                case "d":
                    var audio = new Audio("D:\\Radnom\\WebDevelopment\\Unit18_Drum_Kit_Project\\Drum Kit Starting Files\\sounds\\tom-4.mp3");
                    audio.play();
                    break;

                case "j":
                    var audio = new Audio("D:\\Radnom\\WebDevelopment\\Unit18_Drum_Kit_Project\\Drum Kit Starting Files\\sounds\\crash.mp3");
                    audio.play();
                    break;

                case "k":
                    var audio = new Audio("D:\\Radnom\\WebDevelopment\\Unit18_Drum_Kit_Project\\Drum Kit Starting Files\\sounds\\snare.mp3");
                    audio.play();
                    break;

                case "l":
                    var audio = new Audio("D:\\Radnom\\WebDevelopment\\Unit18_Drum_Kit_Project\\Drum Kit Starting Files\\sounds\\kick-bass.mp3");
                    audio.play();
                    break;
            }
        }
document.addEventListener('keydown', (e) => { playSound(e.key); animationButton(e.key); });
        

        function animationButton(keyString){
            document.querySelector("." + keyString).classList.add("pressed");
             
            setTimeout(function(){
                document.querySelector("." + keyString).classList.remove("pressed");

            },1000)
        }

    


var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: async function () {
        if (lottie.splashscreen.animationEnded) {
            console.log("-----> ANIMATION ENDED BY VARIABLE!");
            await lottie.splashscreen.hide();
        } else {
            console.log("-----> Animation has not been played yet... Let's listen on event");
            lottie.splashscreen.on("lottieAnimationEnd", async function () { //This is never being fired
                console.log("-----> ANIMATION ENDED!");
                await lottie.splashscreen.hide();
            });
        }
    }
};

app.initialize();

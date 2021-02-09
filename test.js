
if (window.matchMedia && window.matchMedia('(max-device-width: 960px)').matches || screen.width <= 960) {
    document.body.style=`
    background-image:url('./images/android.jpg');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */`
}
else{
    const video = document.createElement('video');
    const media = document.getElementById('videoBackground');
    media.appendChild(video);
    video.src="/images/background.mp4";
    video.autoplay=true;
    video.loop=true;
    video.style=` width: 100%;
    height: 100vh;
    object-fit: cover;`
    
}
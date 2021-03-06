const videoBackground = document.getElementById('videoBackground');
const body = document.body;
if(window.matchMedia && window.matchMedia('(max-device-width: 960px)').matches || screen.width <= 960)
{
    body.style=` width: 100%;
    height: 100vh;
    background-image: url('./images/android.jpg');
    background-size: cover;
    background-position:center;`;
}
else{
    const video = document.createElement('video');
    video.src='/images/background.mp4';
    video.loop=true;
    video.autoplay=true;
    video.style=`width: 100%;
    height: 100vh;
    object-fit: cover;`;
    videoBackground.appendChild(video);
}
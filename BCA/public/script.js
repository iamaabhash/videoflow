const videoContainer = document.getElementById('videoContainer');

// Dummy videos array
const videos = [
  "videos/video1.mp4",
  "videos/video2.mp4",
  "videos/video3.mp4",
  "videos/video4.mp4"
];

// Function to create and load videos
function loadVideos() {
  videos.forEach(videoSrc => {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.controls = true;
    video.style.width = '300px'; 
    video.style.margin = '10px';

    videoContainer.appendChild(video);
  });
}

// Jab page load ho to videos load ho jaye
loadVideos();
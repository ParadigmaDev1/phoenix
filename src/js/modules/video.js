const videoWrappers = document.querySelectorAll(".video-block");
if (videoWrappers.length > 0) {
  videoWrappers.forEach((wrapper) => {
    const video = wrapper.querySelector("video");
    const btn = wrapper.querySelector(".play-btn");
    if (video) {
      video.volume = 0.1;
      video.addEventListener("click", () => {
        if (video.paused === true) {
          video.play();
          if (btn) {
            btn.style.opacity = "0";
          }
        } else {
          video.pause();
          if (btn) {
            btn.style.opacity = "1";
          }
        }
      });
      if (btn) {
        btn.addEventListener("click", () => {
          if (video.paused === true) {
            video.play();
            if (btn) {
              btn.style.opacity = "0";
            }
          } else {
            video.pause();
            if (btn) {
              btn.style.opacity = "1";
            }
          }
        });
      }
    }
  });
}

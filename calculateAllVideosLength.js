function getAllYouTubeVideosTime() {
    const allVideos = document.querySelectorAll(
        "ytd-playlist-panel-video-renderer"
      );
      const allVideosTime = Array.from(allVideos).map(
        (video) => video.querySelector("#text").innerText
      );
      const allVideosTimeInSeconds = allVideosTime
        .map((videoTime) =>
          videoTime
            .split(":")
            .map((timeUnit, i, parent) => timeUnit * 60 ** (parent.length - 1 - i))
            .reduce((acc, curr) => acc + curr)
        )
        .reduce((acc, curr) => acc + curr);
      
      function secondsToHms(givenSeconds) {
        givenSeconds = Number(givenSeconds);
        var h = Math.floor(givenSeconds / 3600);
        var m = Math.floor((givenSeconds % 3600) / 60);
        var s = Math.floor((givenSeconds % 3600) % 60);
      
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
        return hDisplay + mDisplay + sDisplay;
      } 
      
      return secondsToHms(allVideosTimeInSeconds)
}
getAllYouTubeVideosTime()
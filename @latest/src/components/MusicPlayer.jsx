import React , {useState, useRef, useEffect} from 'react'
import PCircle from './PCircle'
import WaveAnim from './WaveAnim'
import Controls from './Controls';
import  '../screen/myplaylist.css'

function MusicPlayer({
    currentTrack,
  currentIndex,
  setCurrentIndex,
  total,
}){
     const [isPlaying, setIsPlaying] = useState(false);
const [trackProgress, setTrackProgress] = useState(0);

//var audioSrc = total[currentIndex]?.track.preview_url;
var audioSrc = 'http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3';

  // 
  const audioRef = useRef(new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3'));


const intervalRef = useRef();

const isReady = useRef(false);

const { duration } = audioRef.current;

const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

const startTimer = () => {
  clearInterval(intervalRef.current);

  intervalRef.current = setInterval(() => {
    if (audioRef.current.ended) {
      handleNext();
    } else {
      setTrackProgress(audioRef.current.currentTime);
    }
  }, [1000]);
};

useEffect(() => {
  if (audioRef.current.src) {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  } 
  else {
    if (isPlaying) {
      audioRef.current = new Audio(audioSrc);
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }
}, [isPlaying]);

useEffect(() => {
  audioRef.current.pause();
  audioRef.current = new Audio(audioSrc);

  setTrackProgress(audioRef.current.currentTime);

  if (isReady.current) {
    
    
    audioRef.current.play();
    setIsPlaying(true);
    startTimer();
  } else {
    isReady.current = true;
  }
}, [currentIndex]);

useEffect(() => {
  return () => {
    audioRef.current.pause();
    clearInterval(intervalRef.current);
  };
}, []);

const handleNext = () => {
  if (currentIndex < total.length - 1) {
    setCurrentIndex(currentIndex + 1);
  } else setCurrentIndex(0);
};

const handlePrev = () => {
  if (currentIndex - 1 < 0) setCurrentIndex(total.length - 1);
  else setCurrentIndex(currentIndex - 1);
};

const addZero = (n) => {
  return n > 9 ? "" + n : "0" + n;
};
const artists = [];
currentTrack?.album?.artists.forEach((artist) => {
  artists.push(artist.name);
});
return (
  <div className="flex">
    <div className="-left-20">
      <PCircle
        percentage={currentPercentage}
        isPlaying={isPlaying}
        image={currentTrack?.album?.images[0]?.url}
        size={280}
        color="#C96850"
      />
    </div>
    <div className="player-right-body flex">
      <p className="song-title">{currentTrack?.name}</p>
      <p className="song-artist">{artists.join(" | ")}</p>
      <div className="player-right-bottom flex">
        <div className="song-duration flex">
          <p className="duration">0:{addZero(Math.round(trackProgress))}</p>
          <WaveAnim isPlaying={isPlaying} />
          <p className="duration">0:30</p>
        </div>
        <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          handleNext={handleNext}
          handlePrev={handlePrev}
          total={total}
        />
      </div>
    </div>
  </div>
);
}

export default MusicPlayer
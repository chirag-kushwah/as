'use client';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const videoItems = [
  { src: '/video.mp4', title: 'Best Bro Rakhi Hamper', type: 'video' },
  { src: '/video.mp4', title: 'The Sibling Shenanigans', type: 'image' },
  { src: '/video.mp4', title: 'The Bingo Singles Hamper', type: 'image' },
  { src: '/video.mp4', title: "Mommy's Serenity Bundle", type: 'image' },
  { src: '/video.mp4', title: 'The Trailblazer Kit', type: 'image' },
  { src: '/video.mp4', title: 'The Trailblazer Kit', type: 'image' },
  { src: '/video.mp4', title: 'The Trailblazer Kit', type: 'image' },
  { src: '/video.mp4', title: 'The Trailblazer Kit', type: 'image' },
];

const VideoSwiper = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <h3 className="text-center text-yellow-600 font-semibold text-4xl mb-6">
        Gifts that made an impression!
      </h3>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={5}
        navigation
        className="mySwiper"
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
      >
        {videoItems.map((item, idx) => (
          <SwiperSlide key={idx}>
            <VideoPlayer item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const VideoPlayer = ({ item }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          await videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error('Video playback error:', error);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative group">
      <video
        ref={videoRef}
        src={item.src}
        muted={isMuted}
        className="w-full h-auto rounded-lg object-cover"
        controls={false}
        loop
        playsInline
      />

      {/* Top-left buttons */}
      <div className="absolute top-2 left-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={togglePlay}
          className="bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition focus:outline-none"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
        </button>

        <button
          onClick={toggleMute}
          className="bg-black bg-opacity-70 text-white p-2 rounded-full hover:bg-opacity-90 transition focus:outline-none"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <FaVolumeMute size={16} /> : <FaVolumeUp size={16} />}
        </button>
      </div>

      {/* Bottom-left title */}
      <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm p-1 rounded">
        {item.title}
      </div>
    </div>
  );
};

export default VideoSwiper;

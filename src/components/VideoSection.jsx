import { motion } from 'framer-motion';

const VideoCard = ({ title, thumbnail, views, duration, url }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="video-card"
    whileHover={{ y: -4 }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="video-thumbnail">
      <img src={thumbnail} alt={title} />
    </div>
    <div className="video-info">
      <h3>{title}</h3>
      <div className="video-meta">
        <span>{views} views</span>
        <span>{duration}</span>
      </div>
    </div>
  </motion.a>
);

const VideoSection = ({ title, videos }) => {
  return (
    <motion.section 
      className="video-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{title}</h2>
      <div className="video-grid">
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </motion.section>
  );
};

export default VideoSection;

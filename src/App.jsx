import { motion } from 'framer-motion';
import { FaYoutube, FaBook } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import VideoSection from './components/VideoSection';
import './App.css';

const LinkButton = ({ href, icon: Icon, label, variant = 'default', delay = 0 }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`link-button ${variant}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 + delay * 0.1, duration: 0.5 }}
    whileHover={{ y: -3, boxShadow: 'var(--shadow-hover)' }}
    whileTap={{ scale: 0.98 }}
  >
    <Icon className="link-icon" />
    <span>{label}</span>
  </motion.a>
);

const Profile = () => (
  <motion.div 
    className="profile"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div 
      className="profile-image-container"
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      <img 
        src="/profile.png" 
        alt="Profile" 
        className="profile-image" 
      />
    </motion.div>
    <h1 className="name">Simplified With Varun</h1>
    <p className="description">
      All the downloadables for my channel can be found here! Consider{' '}
      <a 
        href="https://youtube.com/@1thoughtdeeper" 
        className="highlight" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        subscribing
      </a>{' '}
      if you've found this content helpful.
    </p>
  </motion.div>
);

// Sample video data - replace with your actual video data
const videoSections = [
  {
    title: 'Latest Videos',
    videos: [
      {
        title: 'Publish Your Notes Online For Free With Obsidian',
        thumbnail: '/images/1.png',
        views: '1.2K',
        duration: '12:45',
        url: 'https://www.youtube.com/watch?v=IeF4rdpxO0o'
      },
      {
        title: 'I Journaled EVERYDAY For 4 YEARS And It Changed My LIFE',
        thumbnail: '/images/5.png',
        views: '1.5K',
        duration: '10:22',
        url: 'https://www.youtube.com/watch?v=uwfZcsOJw8s'
      },
      {
        title: 'Take Your Obsidian Digital Garden To The Next Level',
        thumbnail: '/images/pkm.webp',
        views: '2.1K',
        duration: '8:45',
        url: 'https://www.youtube.com/watch?v=mmHsZFvVc70'
      }
    ]
  },
  // Add more sections as needed
];

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="app">
      <div className="container">
        <Profile />
        
        <div className="links">
          <LinkButton 
            href="https://youtube.com/@1thoughtdeeper" 
            icon={FaYoutube} 
            label="YouTube Channel" 
            variant="youtube"
            delay={0}
          />
          <LinkButton 
            href="https://pkmworks.vercel.app" 
            icon={FaBook} 
            label="My PKM" 
            variant="pkm"
            delay={1}
          />
        </div>

        {videoSections.map((section, index) => (
          <VideoSection 
            key={index}
            title={section.title}
            videos={section.videos}
          />
        ))}
      </div>
    </div>
  )
}

export default App

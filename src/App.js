import React from 'react';
import Appbar from './components/appbar/Appbar';
import Hero from './components/hero/Hero';
import './app.scss'
import GetStarted from './components/getStarted'
import Category from './components/category'
import VideoSec from './components/videoSec'
import {Container} from 'react-bootstrap';
import Review from './components/review';
import BlogPost from './components/blogPost';
import Footer from './components/footer';

export default function App() {

  return (
    <div>
      <Hero />
      <Container>
        <GetStarted />
        <Category />
        <VideoSec />
        <Review />
        <BlogPost />

      </Container>
      
      <Footer />
    </div>
  )
}

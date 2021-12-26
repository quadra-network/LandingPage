import React, {Component} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Animation from '../components/Animation';
import Banner from '../components/Banner';
import Joinform from '../components/Joinform';
import Slide from '../components/Slide';
import Timeline from '../components/Timeline';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Respct.Club</title>
          <meta name="Respct.Club" content="Respct.club is a creator token platform where you become a shareholder in the journey of your favorite creator" />
        </Head>
        <Header/>
        <br />
        <br />

        <Banner/>
        <br />
        <br /><br />
        <br />
        <Animation/>
        <br />
        <br />

        <Slide/>
        <br />
        <br />

        <Joinform/>
        
        {/* <Timeline/> */}

        {/* <CarouselCover/> */}
        {/* <Menu/> */}
        {/* <AboutUs/> */}
        {/* <BlogsComponent/> */}
        {/* <OurTeam/> */}
        {/* <br /> */}
        {/* <Testimonials/> */}
        <Footer/>
        {/* <FindUs/> */}
      </div>
    );
  }
}

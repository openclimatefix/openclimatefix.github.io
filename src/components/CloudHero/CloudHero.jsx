import React, { Component } from 'react';

import styles from './CloudHero.module.css';


class CloudHero extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop = window.scrollY;
    document.getElementById('clouds').style.left = `-${scrollTop / 3}px`;
  }

  render() {
    return (
      <div className="static">
        <div
          id="overlay"
          className="absolute z-10 bg-transparent w-screen flex items-center justify-center"
          style={{ height: 'calc(100vh - 80px)' }}
        >
          <div className="text-white text-center">
            <h1 className="m-0 text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold">
              Open Climate Fix
            </h1>
            <p className="mt-2 md:text-lg lg:text-xl xl:text-xl">Using computers to fix climate change</p>
          </div>
        </div>
        <div
          id="clouds"
          className={styles.background}
          style={{ height: 'calc(100vh - 80px)' }}
        />
        <div
          className="w-screen bg-black"
          style={{ height: 'calc(100vh - 80px)' }}
        />
      </div>
    );
  }
}

export default CloudHero;

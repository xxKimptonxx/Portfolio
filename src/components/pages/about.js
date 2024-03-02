import React from 'react';
import './about.scss'

function AboutPage({ dark }) {
  document.title = "About | Kimpton";
  return (
    <>
      <h1 style={{ color: dark ? "#ffffff" : "#000000" }}>About:</h1>
      <h2 style={{ color: dark ? "#ffffff" : "#000000" }}>Background:</h2>
      <p style={{ color: dark ? "#ffffff" : "#000000" }}>
        My name is Kimpton. I am a self-taught versatile software engineer
        specializing in multiple fields, web development, python and mobile
        apps. I bring the purest of creativity, efficiency and reliability to
        every project.
      </p>
      <h2 style={{ color: dark ? "#ffffff" : "#000000" }}>My skills:</h2>
      <h3 style={{ color: dark ? "#ffffff" : "#000000" }}>Web Development:</h3>
      <p style={{ color: dark ? "#ffffff" : "#000000" }}>
        In the web development I specialize in front end development using
        frameworks such as React.js and Atropos.js to create beautiful websites
        yet functional and powerful websites. I create top of the line user
        friendly User Interface and User experiences. My websites have a special
        and modern yet simplistic enough for the users the best and most
        user-friendly experiences. I also have the ability to add 3D effects to websites.
      </p>
      <h3 style={{ color: dark ? "#ffffff" : "#000000" }}>Python:</h3>
      <p style={{ color: dark ? "#ffffff" : "#000000" }}>
        I create solutions solutions, automatons and apps that not only suit
        your needs but also solve day to day problems.
      </p>
      <h3 style={{ color: dark ? "#ffffff" : "#000000" }}>
        Flutter and React Native(mobile apps):
      </h3>
      <p style={{ color: dark ? "#ffffff" : "#000000" }}>
        I can create responsive, fast and seamless applications publishable to
        the AppStore and or the Playstore to using one of the powerful frameworks,
        Flutter or React native.
      </p>
      <h3 style={{ color: dark ? "#ffffff" : "#000000" }}>Firebase:</h3>
      <p style={{ color: dark ? "#ffffff" : "#000000" }}>
        Firebase is a multi-platform developer tool that allows users to signup,
        login, store data and files and much more. Firebase can be used in
        python, web development and mobile apps allowing you to integrate all
        these tools across web, mobile and pc.
      </p>
    </>
  );
}

export default AboutPage;
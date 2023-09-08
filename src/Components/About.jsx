/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/stat2.jpg";

const imageAltText = "sky background beautiful and simple";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Cloud Security student studying at Addis Ababa Science and Technology University. I enjoy creating unique and secure cloud architecture in creative ways.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Cloud Architect",
  "Cloud Security",
  "Architect Design",
  "Security testing",
  "JavaScript",
  "",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a Cloud Security Engineer, I am responsible for designing, implementing, and maintaining the security of my organization’s cloud computing environment. I use my expertise in cloud technology to recognize and stop threats to our cloud systems, ensure security controls are properly implemented and configured, and create cloud-based programs and systems. My role includes identifying and mitigating potential cloud-based security risks, developing and implementing security controls for the cloud, and ensuring compliance with relevant security regulations and standards. I am dedicated to keeping our cloud environment secure and protected against cyber threats.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;

import React, {Component} from 'react';
import {Jumbotron} from 'reactstrap';
import './aboutPage.css';

export default class AboutPage extends Component {
  render() {
    // const SCEInternshipDocs=<a href=""></a>
    // const SCEGitHub = <a href="/">git repository</a>;
    const aboutContents1 =
      "I'm a 3rd year Software Engineering student at San Jose State University! " +
      'Currently I am situated in Pleasanton, where I live with my parents. In the ' +
      '(very near) future, I am hoping to land a Software Engineering job in the Bay ' +
      'Area to help ease the financial burden of living here. ' +
      "I'm a firm believer that I am nothing without my family, so I will do all that " +
      'I can to better their lives ❤.';
    const aboutContents2a =
      'As a first-generation Chinese-American born and raised in the Bay ' +
      'Area, I was fortunate enough to be able to experience all kinds of different cultures ' +
      'without fearing discrimination. I moved around quite a lot as well: starting out in ' +
      'Daly City, then to Redwood City, Santa Clara, and now Pleasanton. Given how far each city ' +
      'is from one another, you could say that I was able to experience different communities at ' +
      'different stages of my life. Moving around and traveling had become a part of me.';
    const aboutContents2b =
      'Since I was born into an immigrant family, I was also able to experience the cultures of ' +
      "my parents's family as well. During summer breaks, I would almost always visit family, " +
      'whether in Shanghai, Hong Kong, Vietnam, even Japan too. And when we got there, it was like ' +
      'a whole new world 🎵. I even got to travel and visit other countries in Asia like Taiwan, ' +
      'Korea, and Singapore. I was like a newly bought sponge, constantly taking in the endless ' +
      'streams of culture and experiences that I would have never known about without my family. ' +
      'I got to learn so much about each country to the point where their culture became a part ' +
      'of who I am today 🌎.';
    const aboutContents3a =
      'I currently live in Pleasanton and usually commute to school, but I have had to stay ' +
      'home because of the shelter-in-place (which saves me a lot of time thankfully 😊).';
    const aboutContents3b =
      'With my free time, I have decided to take this opportunity to learn something ' +
      "new! Over the summer, I had the wonderful opportunity to intern 💻 for my school's " +
      'Software and Computer Engineering Society (SCE for short). In this 10-week program ' +
      "I got to work on the Core-v4, which is SCE's git repository for their official website. " +
      'During this 10-week period, I got to learn a lot about many web development skills and ' +
      'languages such as working with APIs, React, Node.js, Javascript, and others as well! ' +
      'Because of how much fun I had developing my internship project, I decided to take it a ' +
      'step further with side projects.';
    const aboutContents3c =
      'One side project that I have been intensely working on since my summer break is the Clash Royale ' +
      'Discord Bot 🤖. The Clash Royale Discord Bot fetches game data from the official game API' +
      '(which was developed by the creators) and translates/presents it into more readable data. ' +
      'I was able to use these really cool Discord embeds to make it work. I think there are 7 total ' +
      'functions, so it is mostly complete. I do, however, want to add other functions in the future ' +
      'involving other games that I play 🎮, so I will do that when the time comes.';
    const aboutContents3d =
      'The other side project is this personal website. Although it is still pretty empty, I was ' +
      'still able to learn a lot about some key full stack skills like routing, databases, and server ' +
      'deployment. I am currently spending a lot of time on this project because I want to learn more ' +
      'about frontend development stuff, which is kinda painful to do. Looks like the constant memes ' +
      'about people looking up how to center a div in stack overflow are actually kind of real 😅. ';
    const aboutContents4a =
      "I'll be honest. I worked on this entire page(writing and coding and all) in one sitting " +
      'and now my brain is starting to hurt. So for now, I shall stop here, and you can think of ' +
      'this as a double meaning as well: a place for me to stop working and a place for you to stop ' +
      "reading 😉. If you aren't sick of my work yet, feel free to go visit my other pages or " +
      'my socials! Would love to connect with you on LinkedIn or GitHub or some other social media ' +
      'platforms! Just to go the footer at the bottom and the links should work as necessary. Thank you ' +
      'for reading ✌.';
    const aboutEnd = 'Made with love by Justin 💟';
    return (
      <div className="aboutPage">
        <Jumbotron className="jumbotron-spacing">
          <h1>About me!</h1>
          <hr className="my-2" />
          <p>This is just a little bit about who I am :)</p>
        </Jumbotron>
        <div className="content-container">
          <div className="text-container">
            <div>
              <h3>I am Justin Zhu.</h3>
              <hr className="heading__hr" />
              <p className="text-contents margin-end-text">{aboutContents1}</p>
            </div>
            <div>
              <h3>You Can Call Me an Adventurer.</h3>
              <hr className="heading__hr" />
              <p className="text-contents">{aboutContents2a}</p>
              <p className="text-contents margin-end-text">{aboutContents2b}</p>
            </div>
            <div>
              <h3>The Second Summer of my College Career was Amazing.</h3>
              <hr className="heading__hr" />
              <p className="text-contents">{aboutContents3a}</p>
              <p className="text-contents">{aboutContents3b}</p>
              <p className="text-contents">{aboutContents3c}</p>
              <p className="text-contents margin-end-text">{aboutContents3d}</p>
            </div>
            <div>
              <h3>To be continued...</h3>
              <hr className="heading__hr" />
              <p className="text-contents">{aboutContents4a}</p>
            </div>
            <div>
              <hr className="heading__hr" />
              <p className="contain-end">{aboutEnd}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

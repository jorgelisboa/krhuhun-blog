import React from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";

/*
    -- React is a JavaScript Librarie --
- React use components to create and show us a JSX(the HTML and JS inside the functions).
- Next.js is "The web SDK", which has tools that help you create your own website.
- To create an React application you need first of all use yarn or node(npm).*/

//Here we crate OUR React component called "Titulo" that returns and JSX
function Header(props) {
  const router = useRouter();

  return (
    <header>
      <nav>
        <div>
          <h1>JL</h1>
        </div>
        <ul>
          <li>
            <a onClick={() => router.push('/about')}>About me</a>
          </li>
          <li>
            <a onClick={() => router.push('/news')}>Blog</a>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          nav {
            padding: 0 10%;
            align-items: center;
            justify-content: space-between;
            display: flex;
            height: 110px;
            width: 100%;
          }

          div {
            padding: 1.5em 1.8em;
            background-color: #963d3d;
          }

          nav ul {
            float: right;
          }

          nav li {
            display: inline-block;
            margin: 0 5px;
          }

          a {
            text-decoration: none;
            cursor: pointer;
          }
        `}
      </style>
    </header>
  );
}
function Intro() {
  return (
    <section>
      <img src="https://art.pixilart.com/e5c1fc858e8d359.gif" alt="Krhuhun GIF" />
      <div>
        <h1>Krhuhun</h1>
        <h2>Newsletter</h2>
      </div>
      <style jsx>
        {`
          section {
            display: flex;
            align-items: center;
            margin: 0 auto 5% auto;
            width: 80%;
            justify-content: space-evenly;
            flex-wrap: wrap;
          }
          img {
            width: 100%;
            max-width: 256px;
          }
          div {
            width: auto;
            font-size: 250%;
          }
          h1 {
            font-weight: 100;
          }
          h2 {
            font-weight: 100;
            display: block;
            margin-left: 64px;
          }

          @media (max-width: 500px) {
            div {
              margin-top: 16px;
              width: auto;
              font-size: 150%;
            }
          }
        `}
      </style>
    </section>
  );
}
function PerfilImage() {
  return (
    <div>
      <img src="https://cdn.discordapp.com/attachments/438100369802002432/941338488714969178/photo.png" alt="Jorge photo" />
      <style jsx>{`
        div {
          max-width: 512px;
          
          text-align: center;
          background-color: #963d3d;
        }
        img {
          width: 100%;
        }
        @media (max-width: 900px) {
          div {
            margin: 32px auto;
            width: 80%;
          }
        }
      `}</style>
    </div>
  );
}
function AboutMe() {
  return (
    <section>
      <div>
        <h1>Jorge Lisboa</h1>
        <h2>Full-stack developer</h2>
        <h3>
          I am a teenager developer called Jorge, from Brazil,
          systems development technician and student from PUC in information systems. I’ve already acted
          with C#, in back-end, HTML, CSS, JavaScript and React, in Front-end and Android, Kotlin and Java in
          Mobile development. I’ve used another technologies, and I want to make the difference in the world and
          became a full-stack developer.
        </h3>
      </div>
      <PerfilImage />
      <style jsx>{`
        section {
          margin: 64px 0;
          background-color: #302929;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          width: 100%;
          justify-content: center;
        }
        div {
          margin-right: 15%;
          width: 40%;
        }
        h1 {
          margin: 32px 0 8px 0;
          font-size: 2.5em;
          color: #963d3d;
        }
        h2 {
          color: #727070;
          margin: 8px 0 32px 0;
        }
        @media (max-width: 900px) {
          div {
            text-align: center;
            margin: 0 auto;
            width: 80%;
          }
        }
      `}</style>
    </section>
  );
}
function Contact() {  
  return (
    <section>
      <h1>Contact me</h1>
      <p>If you got interested in my work or just want to send me a hello, call me here I will be glad to see your messages.</p>
      <div>
        <form>
          <input type="text" placeholder="Full Name" maxLength="60" required></input>
          <input type="email" placeholder="Your Email" maxLength="40" required></input>
          <select>
            <option value="repair">Repair an existing system</option>
            <option value="create">
              create a system from scratch</option>
            <option value="participate">participate in a project</option>
            <option value="other">Other...</option>
          </select>
          <input type="submit" value="Submit"></input>
        </form>
      </div>

      <style jsx>{`
       h1 {
        font-size: 2.5em;
        color: #963d3d;
      }

      input, select, option {
        background-color: #302929;
        border: none;
        width: 90%;
        cursor: pointer;
        margin: 8px 0;
        padding: 16px;
      }

      p{
        margin-top: 10px;
      }

      section {
        text-align: center;
      }

      div{
        justify-content: center;
        max-width: 80%;
        margin: 40px auto;
        display: flex;
        flex-wrap: wrap;
      }
    `}</style>
    </section>
  )
}
function HomePage() {
  return (
    <>
      <Header />
      <Intro />
      <AboutMe />
      <Contact />
    </>
  );
}

export default HomePage;
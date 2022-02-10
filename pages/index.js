/*
    -- React is a JavaScript Librarie --
- React use components to create and show us a JSX(the HTML and JS inside the functions).
- Next.js is "The web SDK", which has tools that help you create your own website.
- To create an React application you need first of all use yarn or node(npm).*/

//Here we crate OUR React component called "Titulo" that returns and JSX
function Header(props) {
  console.log(props.children);
  return (
    <header>
      <nav>
        <div class="box-icon">
          <h1>JL</h1>
        </div>
        <ul>
          <li>
            <a href="">About me</a>
          </li>
          <li>
            <a href="">Blog</a>
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
  return(
    <section>
      <img src="https://art.pixilart.com/e5c1fc858e8d359.gif" alt="Krhuhun GIF"/>
      <div>
        <h1>Krhuhun</h1>
        <h2>Newsletter</h2>
      </div>
      <style jsx>
        {`
          section {
            display: flex;
            align-items: center;
            margin: 3% auto;
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
function HomePage() {
  return (
    <>
      <Header />
      <Intro />
    </>
  );
}

export default HomePage;
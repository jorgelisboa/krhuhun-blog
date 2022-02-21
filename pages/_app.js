import { useRouter } from "next/router";

function GlobalStyle() {
    return (
      <style global jsx>{`
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

        * {
          //   

          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
          color: #FFFFFF;
        
        }
        body {
          background-color: #383131;
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    );
}

function Header() {
  const router = useRouter();

  return (
    <header>
      <nav>
        <a onClick={() => router.push('/')}>
          <div>
            <h1>JL</h1>
          </div>
        </a>
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

export default function MyApp({ Component, pageProps }) {
    return(
        <>
            <GlobalStyle/>
            <Header />
            <Component {...pageProps}/>
        </> 
    )
}
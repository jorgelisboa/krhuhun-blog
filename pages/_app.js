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


export default function MyApp({ Component, pageProps }) {
    return(
        <>
            <GlobalStyle/>
            <Component {...pageProps}/>
        </> 
    )
}
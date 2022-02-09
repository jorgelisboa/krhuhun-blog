/*
    -- React is a JavaScript Librarie --
- React use components to create and show us a JSX(the HTML and JS inside the functions).
- Next.js is "The web SDK", which has tools that help you create your own website.
- To create an React application you need first of all use yarn or node(npm).*/

//Here we crate OUR React component called "Titulo" that returns and JSX
function Titulo(props) {
    console.log(props.children)
    return ( < >
        <h1> This is React </h1> 
        <nav>
        <h1>Logo</h1>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
        </ul>
    </nav>
        <style jsx > { `
        h1 {
          color: darkblue;
        }
        nav{
          height: 110px;
          width: 100%;
          background: #f2f2f2;
        }

        nav ul {
          float: right;
          margin-right: 40px;
      }
      
      nav ul li {
          display: inline-block;
          line-height: 80px;
          margin: 20px 8px;
      }
      ` } </style> 
      </>
    );
}

function HomePage() {
    return ( <div > {
            /*   
                    The content inside a tag is a children from 
                    our properties, and the properties are called 
                    when the Component is created
                  */
        } <Titulo> Welcome to our React app </Titulo> 
        <h7> (see the console) </h7> 
        </div>
    );
}

export default HomePage;
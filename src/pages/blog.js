import ArticleViewer from '../components/blog';

const Blog = () => {
    return (<div className='grid grid-cols-12 p-12 gap-5 '>

      
<ArticleViewer  title="6 Easy Steps to Create a React Web App"
        content={`

React is a popular framework for creating user interfaces for web applications. Here, I'll show you how to program a React app in a few simple steps – perfect for beginners!

###### 1. Setting Up the Development Environment

First, you need Node.js and npm (Node Package Manager), which you can download and install from nodejs.org. Node.js is required to develop React apps locally, and npm helps manage all the necessary dependencies.

###### 2. Creating a New React App

Once Node.js is installed, you can create your first React app with a simple command. Open a terminal and run the following command:

\`\`\`bash
npx create-react-app kmail_at
\`\`\`

This command will create a new React application that already contains all the necessary files and a basic structure. The name "my-first-react-app" can be replaced with any project name.

###### 3. Starting the Project

Navigate to the project directory and start the application:

\`\`\`bash
cd kmail_at
npm start
\`\`\`
!#caption this command runs the app in development mode

![Image](../../images/art1.png)
!#caption screenshot of the terminal | WSL Ubuntu 20.04


This will start a development server, and your app should be accessible at http://localhost:3000. Here you can see your changes immediately without manually reloading the page.

###### 4. Editing the App

The main file of your app is located in the  src  directory, and the App.js file contains the base component. Edit the text in this file to customize the user interface. Everything you change here will be updated directly on your local website.

Example:

\`\`\`javascript
function App() {
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <p>This is my first React app.</p>
    </div>
  );
}
\`\`\`

###### 5. Creating Components

React uses components to divide the user interface into smaller, reusable parts. Create a new file, e.g., Hello.js, in the src directory, and define a simple component:

\`\`\`javascript
function Hello() {
  return <h2>Hello from the component!</h2>;
}

export default Hello;
\`\`\`

Then import and use this component in the App.js file:

\`\`\`javascript
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <Hello />
      <p>Welcome to my first React app.</p>
    </div>
  );
}
\`\`\`

###### 6. Deploying the App

Once your app is ready, you can build it for deployment with the following command:

\`\`\`bash
npm run build
\`\`\`


This command creates an optimized version of your app in the build directory, which can then be published on a web server.

Conclusion

React makes it easy to develop dynamic web applications. With these few steps, you can already create and customize your own React app. Happy coding!



`}
        author="Mohammed Kmail"
        date="2024-10-01"
        />

<ArticleViewer span={5}  title="6 Easy Steps to Create a React Web App"
        content={`


!#caption this command runs the app in development mode

![Image](../../images/art1.png)
!#caption screenshot of the terminal | WSL Ubuntu 20.04




###### 5. Creating Components

React uses components to divide the user interface into smaller, reusable parts. Create a new file, e.g., Hello.js, in the src directory, and define a simple component:

\`\`\`javascript
function Hello() {
  return <h2>Hello from the component!</h2>;
}

export default Hello;
\`\`\`

Then import and use this component in the App.js file:

\`\`\`javascript
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <Hello />
      <p>Welcome to my first React app.</p>
    </div>
  );
}
\`\`\`

###### 6. Deploying the App

Once your app is ready, you can build it for deployment with the following command:

\`\`\`bash
npm run build
\`\`\`


This command creates an optimized version of your app in the build directory, which can then be published on a web server.

Conclusion

React makes it easy to develop dynamic web applications. With these few steps, you can already create and customize your own React app. Happy coding!



`}
        author="Mohammed Kmail"
        date="2024-10-01"
        />
        
<ArticleViewer span={4}  title="6 Easy Steps to Create a React Web App"
        content={`


!#caption this command runs the app in development mode


!#caption screenshot of the terminal | WSL Ubuntu 20.04




###### 5. Creating Components

React uses components to divide the user interface into smaller, reusable parts. Create a new file, e.g., Hello.js, in the src directory, and define a simple component:

\`\`\`javascript
function Hello() {
  return <h2>Hello from the component!</h2>;
}

export default Hello;
\`\`\`

Then import and use this component in the App.js file:

\`\`\`javascript
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <Hello />
      <p>Welcome to my first React app.</p>
    </div>
  );
}
\`\`\`

###### 6. Deploying the App

Once your app is ready, you can build it for deployment with the following command:

\`\`\`bash
npm run build
\`\`\`


This command creates an optimized version of your app in the build directory, which can then be published on a web server.

Conclusion

React makes it easy to develop dynamic web applications. With these few steps, you can already create and customize your own React app. Happy coding!



`}
        author="Mohammed Kmail"
        date="2024-10-01"
        />
        <ArticleViewer  title="6 Easy Steps to Create a React Web App"
        content={`


!#caption this command runs the app in development mode

![Image](../../images/art1.png)
!#caption screenshot of the terminal | WSL Ubuntu 20.04




###### 5. Creating Components

React uses components to divide the user interface into smaller, reusable parts. Create a new file, e.g., Hello.js, in the src directory, and define a simple component:

\`\`\`javascript
function Hello() {
  return <h2>Hello from the component!</h2>;
}

export default Hello;
\`\`\`

Then import and use this component in the App.js file:

\`\`\`javascript
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <Hello />
      <p>Welcome to my first React app.</p>
    </div>
  );
}
\`\`\`

###### 6. Deploying the App

Once your app is ready, you can build it for deployment with the following command:

\`\`\`bash
npm run build
\`\`\`


This command creates an optimized version of your app in the build directory, which can then be published on a web server.

Conclusion

React makes it easy to develop dynamic web applications. With these few steps, you can already create and customize your own React app. Happy coding!



`}
        author="Mohammed Kmail"
        date="2024-10-01"
        />
        <ArticleViewer  title="6 Easy Steps to Create a React Web App"
        content={`


!#caption this command runs the app in development mode

![Image](../../images/image_28.JPEG)
!#caption screenshot of the terminal | WSL Ubuntu 20.04




###### 5. Creating Components

React uses components to divide the user interface into smaller, reusable parts. Create a new file, e.g., Hello.js, in the src directory, and define a simple component:

\`\`\`javascript
function Hello() {
  return <h2>Hello from the component!</h2>;
}

export default Hello;
\`\`\`

Then import and use this component in the App.js file:

\`\`\`javascript
import Hello from './Hello';

function App() {
  return (
    <div className="App">
      <Hello />
      <p>Welcome to my first React app.</p>
    </div>
  );
}
\`\`\`

###### 6. Deploying the App

Once your app is ready, you can build it for deployment with the following command:

\`\`\`bash
npm run build
\`\`\`


This command creates an optimized version of your app in the build directory, which can then be published on a web server.

Conclusion

React makes it easy to develop dynamic web applications. With these few steps, you can already create and customize your own React app. Happy coding!



`}
        author="Mohammed Kmail"
        date="2024-10-01"
        />


        </div>




    );

}

export default Blog;
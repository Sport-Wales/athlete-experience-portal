C:.
ª   .gitignore
ª   Dockerfile
ª   eslint.config.js
ª   index.html
ª   netlify.toml
ª   package-lock.json
ª   package.json
ª   postcss.config.js
ª   railway.toml
ª   README.md
ª   requirements.md
ª   SAVE.md
ª   structure.txt
ª   tailwind.config.js
ª   vite.config.js
ª   
+---public
ª       sport_wales_logo_white.png
ª       sw_favicon.ico
ª       vite.svg
ª       
+---src
    ª   App.jsx
    ª   main.jsx
    ª   
    +---assets
    ª       react.svg
    ª       
    +---components
    ª   ª   Layout.jsx
    ª   ª   
    ª   +---component_library
    ª   +---main
    ª   ª       Footer.jsx
    ª   ª       
    ª   +---ui
    +---data
    +---pages
    +---styles
    ª   ª   index.css
    ª   ª   
    ª   +---custom
    ª           styles.css
    ª           
    +---utils


# Dockerfile

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY . .

RUN npm ci
RUN npm run build

EXPOSE $PORT

CMD ["npm", "start"]


// netlify.toml

[build]
  command = "npm run build"
  publish = "dist"    # Vite uses 'dist' instead of 'build'

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200


// railway.toml

[build]
builder = "nixpacks"
buildCommand = "npm run build"

[deploy]
startCommand = "npm start"
healthcheckPath = "/"
healthcheckTimeout = 100



// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'sw-red': '#E32434',
          'sw-yellow': '#F6B207',
          'sw-blue': '#164B64',
          'sw-green': '#299D91',
          'sw-grey': '#BFBEC5',
          'sw-light-grey': '#F4F5F7',
        },
        fontFamily: {
          primary: ['Montserrat', 'Arial', 'sans-serif'],
        },
        fontSize: {
          'body': '20px',
          'label': '20px',
          'subhead': '20px',
          'secondary': '40px',
          'hero': '95px',
        },
        lineHeight: {
          'tight': '100%',
          'normal': '110%',
          'relaxed': '130%',
        },
      },
    },
    plugins: [],
  }




// package.json 
{
  "name": "SWPT",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "start": "vite preview --host --port $PORT"
  },
  "dependencies": {
    "@fortawesome/fontawesome-free": "^6.7.1",
    "@headlessui/react": "^1.7.19",
    "csv-parse": "^5.6.0",
    "lucide-react": "^0.294.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.37",
    "@types/react-dom": "^18.2.15",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.20",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.15",
    "vite": "^5.0.0"
  }
}





<!-- Index.html -->

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/sw_favicon.ico" />
    <link 
      rel="stylesheet" 
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
    />  

    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;800&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SW Funding Calculator</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>


// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <main>
          <Routes>
            {/* Redirect root to English version */}
            <Route path="/" element={<Navigate to="/en" replace />} />
            
            {/* English route */}
            {/* <Route path="/en" element={<Component />} /> */}
            
            {/* Welsh route */}
            {/* <Route path="/cy" element={<Component />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;



/* src/styles/index.css */

/* SW Global Styles Sheet (SWGS) */

@tailwind base;
@tailwind components;
@tailwind utilities;

/* Language Toggle */
.language-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 50;
}


.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;     /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;             /* Chrome, Safari and Opera */
}


/* Font Face Declarations */
@font-face {
  font-family: 'Objektiv MK1';
  src: url('/fonts/ObjektivMk1-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Objektiv MK1';
  src: url('/fonts/ObjektivMk1-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Objektiv MK1';
  src: url('/fonts/ObjektivMk1-XBold.woff2') format('woff2');
  font-weight: 800;
  font-style: normal;
  font-display: swap;
}

:root {
  /* Primary Brand Colors */
  --color-sw-red: #E32434;
  --color-sw-yellow: #F6B207;
  --color-sw-blue: #164B64;
  --color-sw-green: #299D91;

  /* Primary Brand Colors Accent */
  --color-sw-red-light: #F7BDC2;
  --color-sw-yellow-light: #FFFFB7;
  --color-sw-blue-light: #6CD0FF;
  --color-sw-green-light: #97E9E1;
  --color-sw-red-dark: #8E0A0A;
  --color-sw-yellow-dark: #A77B00;
  --color-sw-blue-dark: #001830;
  --color-sw-green-dark: #005D53;

  /* Neutral Colors */
  --color-black: #000000;
  --color-grey: #BFBEC5;
  --color-light-grey: #F4F5F7;
  --color-white: #FFFFFF;

  /* Typography - Font Families */
  --font-primary: 'Objektiv MK1', 'Montserrat', Arial, sans-serif;
  --font-fallback: 'Montserrat', sans-serif;
  --font-system: 'Arial', sans-serif;

  /* Font Weights */
  --font-weight-regular: 400;
  --font-weight-bold: 700;
  --font-weight-xbold: 800;

  /* Font Sizes */
  --font-size-body: 16px;
  --font-size-label: 20px;
  --font-size-head: 24px;
  --font-size-subhead: 20px;
  --font-size-hero: 95px;

  /* Line Heights */
  --line-height-tight: 100%;
  --line-height-normal: 110%;
  --line-height-relaxed: 130%;

  /* Spacing & Layout */
  --margin-small: 5%;
  --margin-large: 10%;
  --gutter-width: calc(var(--margin-small) / 2);

  /* Border Radius */
  --border-radius-button: 8px;

  /* Component Specific */
  --button-height: 46px;
  --button-padding: 1rem 2rem;

  /* Layout */
  --logo-min-width: 160px;
  --clear-space-logo: 1em;

  /* Transitions */
  --transition-default: 0.3s ease-in-out;

  /* Opacity */
  --overlay-light: 75%;
  --overlay-dark: 90%;
}

/* Base Styles */
@layer base {
  body {
    font-family: var(--font-primary);
    font-size: var(--font-size-body);
    line-height: var(--line-height-normal);
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: var(--font-weight-xbold);
    line-height: var(--line-height-tight);
  }
}

/* Custom Utility Classes */
@layer utilities {
  .sw-text-red {
    color: var(--color-sw-red);
  }

  .sw-bg-red {
    background-color: var(--color-sw-red);
  }

  .sw-text-blue {
    color: var(--color-sw-blue);
  }

  .sw-bg-blue {
    background-color: var(--color-sw-blue);
  }

  .sw-text-yellow {
    color: var(--color-sw-yellow);
  }

  .sw-bg-yellow {
    background-color: var(--color-sw-yellow);
  }

  .sw-text-green {
    color: var(--color-sw-green);
  }

  .sw-bg-green {
    background-color: var(--color-sw-green);
  }
}

@layer components {
  /* Button System */
  .sw-button {
    height: var(--button-height);
    padding: var(--button-padding);
    border-radius: var(--border-radius-button);
    font-weight: var(--font-weight-bold);
    transition: var(--transition-default);
  }

  .sw-button-primary {
    @apply sw-bg-red text-white hover:opacity-90;
  }

  .sw-button-secondary {
    @apply sw-bg-blue text-white hover:opacity-90;
  }

  /* Form Components */
  .sw-input {
    height: var(--button-height);
    border-radius: var(--border-radius-button);
    padding: 0 1rem;
    border: 1px solid var(--color-grey);
    font-family: var(--font-primary);
    font-size: var(--font-size-body);
  }

  .sw-label {
    @apply text-lg font-semibold;
    color: var(--color-sw-blue);
    font-family: var(--font-primary);
  }

  .sw-checkbox {
    @apply w-5 h-5 rounded border-2 focus:ring-2;
    border-color: var(--color-sw-blue);
    color: var(--color-sw-red);
  }

  /* Layout Components */
  .sw-container {
    @apply max-w-5xl mx-auto;
    padding: 0 var(--margin-small);
  }

  .sw-card {
    border-radius: var(--border-radius-button);
    background-color: var(--color-white);
    padding: 1.5rem;
  }

  /* Header Components */
  .sw-header {
    @apply sw-bg-blue text-white p-6;
  }

  .sw-heading-primary {
    @apply text-3xl font-extrabold leading-tight;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-xbold);
  }

  .sw-heading-secondary {
    @apply text-xl font-bold mb-3;
    font-family: var(--font-primary);
    font-weight: var(--font-weight-bold);
  }

  /* Content Display */
  .sw-notice {
    @apply p-4 rounded-lg;
    background-color: rgba(246, 178, 7, 0.1);
    border-left: 4px solid var(--color-sw-yellow);
  }

  .sw-results {
    @apply p-6 rounded-lg;
    background-color: var(--color-sw-blue);
    color: var(--color-white);
  }

  .sw-highlight {
    @apply p-4 rounded-lg;
    background-color: var(--color-sw-green);
    color: var(--color-white);
  }

  .sw-sidebar-card {
    @apply p-6 rounded-lg;
    background-color: var(--color-light-grey);
  }

  /* Mode Toggle Button */
  .mode-toggle-button {
    @apply sw-button flex-1 min-h-[56px] px-8 text-xs font-semibold tracking-wide;
    transition: var(--transition-default);
    
    &.active {
      @apply sw-button-primary shadow-lg scale-105;
    }
    
    &.inactive {
      @apply bg-white border-2 border-[--color-sw-red] text-[--color-sw-red] hover:sw-bg-red hover:text-white hover:scale-102;
    }
  }
}




I'll explain the Sport Wales project template in a way that's accessible for someone new to React programming.

Let's start with understanding the project's foundation and how data flows through it:

### Project Structure Overview

Think of this project like a well-organized house. Each folder has a specific purpose:

```
src/
├── components/     (Reusable parts like furniture)
├── pages/         (Different rooms in the house)
├── styles/        (The interior design)
├── data/          (Storage room)
├── utils/         (Tool shed)
└── assets/        (Decorations)
```

### Understanding React Basics

React is like building with LEGO blocks. Each piece (component) can be reused and connected to other pieces. The main concepts are:

1. **Components** (The LEGO blocks):
   - `App.jsx` is your main component (like the foundation of your house)
   - Components are reusable pieces of code that describe what you want to show on the screen
   - They can be as simple as a button or as complex as an entire page

2. **Data Flow** (Like water flowing through pipes):
   - React uses a "top-down" data flow
   - Data starts at the top (parent components) and flows down to child components
   - In your `App.jsx`, it starts here and flows down to other components

### Key Files Explained

1. **index.html**:
   - This is like the empty plot of land where your React app will be built
   - It contains the `<div id="root"></div>` where your entire React app will be mounted
   - It also includes important resources like fonts and icons

2. **main.jsx**:
   - This is the entry point of your application
   - It connects your React app to the HTML file
   - It's like the foundation being laid on your plot of land

3. **App.jsx**:
   - This is your main component where everything starts
   - It sets up routing (like the hallways in your house):
   ```jsx
   <Router>
     <div className="min-h-screen bg-gray-50">
       <main>
         <Routes>
           <Route path="/" element={<Navigate to="/en" replace />} />
           {/* Routes for English and Welsh versions */}
         </Routes>
       </main>
     </div>
   </Router>
   ```

4. **styles/index.css**:
   - This contains all your styling rules
   - It uses CSS variables (like a color palette for your house)
   - It includes Tailwind CSS utilities (pre-built styling tools)

### How Data Flows

Let's use an example to understand data flow:

```jsx
// Parent Component
function ParentComponent() {
  // Data starts here
  const [userData, setUserData] = useState({
    name: "John"
  });

  return (
    // Data flows down to child through props
    <ChildComponent userName={userData.name} />
  );
}

// Child Component
function ChildComponent({ userName }) {
  // Child receives data through props
  return <div>Hello, {userName}!</div>;
}
```

### Project Features

1. **Bilingual Support**:
   - The app supports both English and Welsh
   - Uses React Router for language switching
   - Default route redirects to English ("/en")

2. **Styling System**:
   - Uses Tailwind CSS for quick styling
   - Custom Sport Wales brand colors and components
   - Responsive design (works on all screen sizes)

3. **Component Organization**:
   ```
   components/
   ├── component_library/  (Reusable UI components)
   ├── main/              (Major components like Footer)
   └── ui/                (Basic UI elements)
   ```

4. **Development Tools**:
   - Vite for fast development
   - ESLint for code quality
   - Support for both development and production environments

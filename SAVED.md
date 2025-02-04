# Sport Wales Project - Changes and Updates (SAVED.md)

## Purpose of This File

This document serves as a living record of all modifications and enhancements made to this Sport Wales Project. It is designed to track changes chronologically and provide clear documentation of the project's evolution. Please use this file to fully understand where the project it currently and always build on from the last updates for this file. 


## Current File Structure
Date: [Current Date]
```
project_name/
├── public/
│   ├── sport_wales_logo_white.png
│   ├── sw_favicon.ico
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── component_library/
│   │   ├── main/
│   │   └── ui/
│   ├── pages/
│   ├── assets/
│   ├── data/
│   ├── styles/
│   │   ├── index.css
│   │   └── custom/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
└── [Configuration Files]

```

## Added Dependencies
Date: [Current Date]

```json
{
  "dependencies": {
    "@fortawesome/fontawesome-free": "^6.7.1",
    "@headlessui/react": "^1.7.19",
    "csv-parse": "^5.6.0",
    "lucide-react": "^0.294.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.28.0"
  }
}
```

## Code Changes and Additions

### [Date] - Initial Setup
#### File: src/components/Layout.jsx
```jsx
import React from 'react';

export function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
```



## Configuration Updates

### [Date] - Updated Tailwind Configuration
#### File: tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
{
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
```

## Style Updates

### [Date] - Added Custom Component Styles
#### File: src/styles/custom/components.css
```css
/* New component styles... */


```

## New fFile

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



## Project Overview
This is a **single-page website** built with **React.js**. It includes sections like **Home, Services, Our Work, and Contact Page**. The website has a **fixed Navbar** with smooth scrolling to different sections. The contact form stores data in **localStorage** and includes **form validation**.

----

## 🛠️ Approach  
1. **React.js with React Router:** Used React Router for navigation and `react-scroll` for smooth scrolling.  
2. **Dark Mode Support:** Implemented a **theme toggle** to switch between light and dark mode.  
3. **Responsive Design:** The website is mobile-friendly and adapts to different screen sizes.  
4. **Form Validation & Local Storage:** Added form validation and stored submitted data in local storage.  


##  Challenges Faced & Solutions

1.  **Dark Mode Theme State** - Since this was my first time implementing dark mode, I faced difficulties in managing the theme state properly. The main problems were
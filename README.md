# Othman Alharrar - Personal Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Material-UI (MUI).

## Features

- 🎨 Modern, responsive design with Material-UI
- 📱 Mobile-friendly interface
- 🚀 Fast performance with Vite
- 🧭 Multi-page routing with React Router
- 💼 Showcases projects, skills, and experience
- 📧 Contact information and social links

## Technologies Used

- **React** - UI library
- **React Router** - Client-side routing
- **Vite** - Build tool and development server
- **Material-UI (MUI)** - Component library
- **JavaScript** - Programming language

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/o-alharrar/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── EducationPage.jsx
│   │   ├── SkillsPage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Routes

- **/** - Home page with hero section
- **/about** - Personal information and value proposition
- **/education** - Academic background and coursework
- **/skills** - Technical skills with proficiency levels
- **/projects** - Portfolio projects with descriptions
- **/contact** - Contact information and social links

## Customization

To customize this portfolio for your own use:

1. Update personal information in the component files
2. Modify the theme colors in `src/App.jsx`
3. Add or remove routes in `src/App.jsx` if needed
4. Add or remove projects in `src/components/Projects.jsx`
5. Update skills in `src/components/Skills.jsx`
6. Change social links in `src/components/Contact.jsx` and `src/components/Footer.jsx`

## Deployment

This portfolio can be deployed to various platforms:

- **Vercel** - Recommended for Vite projects
- **Netlify** - Easy deployment with drag-and-drop
- **GitHub Pages** - Free hosting for static sites
- **Appwrite** - If using Appwrite hosting

## License

This project is open source and available under the MIT License.

## Contact

Othman Alharrar
- Email: othman.alharrar@protonmail.com
- GitHub: [@o-alharrar](https://github.com/o-alharrar)
- LinkedIn: [Othman Alharrar](https://www.linkedin.com/in/othman-alharrar-19633b381/)


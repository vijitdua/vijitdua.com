# Vijit Dua's Personal Portfolio Website*

Welcome to the repository for my personal portfolio website hosted at [vijitdua.com](https://vijitdua.com). This website
showcases my **Portfolio**, **Projects**, **Experiences**, provides insights into **who I am**, and includes a
comprehensive **LinkTree/Link-in-bio page** for easy access to my social platforms.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Portfolio Showcase**: A detailed overview of my professional journey, skills, and accomplishments.
- **Projects Gallery**: An organized display of my projects with filtering options and detailed views.
- **Experience Timeline**: A chronological representation of my work experiences and roles.
- **About Me**: A personal introduction that gives visitors insight into who I am beyond my professional life.
- **LinkTree / Link-in-bio Page**: A centralized hub for all my social media profiles and content platforms.
- **Responsive Design**: Optimized for both desktop and mobile viewing.
- **Interactive Animations**: Enhanced user experience with animations using Framer Motion.
- **Dynamic Content**: Projects and experiences are dynamically loaded and filtered.
- **Dark Theme**: Modern dark-themed UI using Material-UI theming.
- **Routing**: Client-side routing with React Router DOM.
- **SEO Friendly**: Meta tags and titles are managed with React Helmet.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Material-UI (MUI)**: UI component library for React.
- **Framer Motion**: Library for animations and gestures.
- **React Router DOM**: Declarative routing for React applications.
- **React Helmet**: Manage document head for React apps.
- **ReactSnap**: To generate PostBuild site crawled HTML for SEO & indexing
    - _puppeteer_ To launch a head-less chrome instance for ReactSnap's site crawling
    - > puppeteer might not work for ARM machines, manual installation of chromium is required for such devices. After
      installing chromium modify your chromium path:
      ```json
      {
      "reactSnap": {
      "puppeteerExecutablePath": "/opt/homebrew/bin/chromium"
      },
      // OR using regular chrome instead of chromium
      "reactSnap": {
       "puppeteerExecutablePath": "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
      }
      ```
- **Digital Ocean Droplet, GitHub Actions, & Docker**: Deployment and hosting.
- **NGINX & Cloudflare**: Web server (in Droplet) and CDN for performance and security.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/vijitdua-portfolio.git
   cd vijitdua-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Variables**

   Create a `.env` file in the root directory and add the following (adjust as needed):

   ```env
   REACT_APP_SITE_LOCATION=https://vijitdua.com
   ```

4. **Run the application**

   ```bash
   npm start
   # or
   yarn start
   ```

   The app should now be running at `http://localhost:3000`.

## Project Structure

```
├── public
│   └── assets
│       └── [images and icons]
├── src
│   ├── components
│   │   ├── collections
│   │   ├── experience
│   │   ├── home
│   │   ├── layout
│   │   ├── menu-items
│   │   ├── projects
│   │   └── typography
│   ├── configs
│   ├── layouts
│   ├── screens
│   ├── themes
│   ├── App.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

- **components/**: Reusable components divided into subfolders based on functionality.
    - **home/**: Components for the home page, including introduction and profile sections.
    - **experience/**: Components for displaying experiences and timelines.
    - **projects/**: Components for project cards, collections, and detailed views.
    - **menu-items/**: Components for navigation and social media links.
    - **typography/**: Custom typography components like quotes and collapsible sections.
- **configs/**: Configuration files for routes, projects, experiences, and miscellaneous constants.
- **layouts/**: Layout components like `MainLayout` for consistent styling across pages.
- **screens/**: Page components corresponding to different routes (Home, About, Portfolio, etc.).
- **themes/**: Material-UI theme configurations and customizations.
- **App.js**: Main application component handling routing and meta information.
- **index.js**: Entry point of the React application.

## Scripts

- **Start Development Server**

  ```bash
  npm start
  ```

- **Build for Production**

  ```bash
  npm run build
  ```

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**

2. **Create a new branch**

   ```bash
   git checkout -b feature/YourFeature
   ```

3. **Make your changes**

4. **Commit your changes**

   ```bash
   git commit -m "Add your message"
   ```

5. **Push to the branch**

   ```bash
   git push origin feature/YourFeature
   ```

6. **Open a Pull Request**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Feel free to reach out for any inquiries or collaboration opportunities.

- **Email**: [inbox@vijitdua.com](mailto:inbox@vijitdua.com)
- **LinkedIn**: [linkedin.com/in/vijitdua](https://linkedin.com/in/vijitdua)
- **Website**: [vijitdua.com](https://vijitdua.com)

---

*Thank you for visiting my portfolio!*

---

_*README.md written by ChatGPT with minor modifications (hey I'm lazy, I already spent enough time writing the code)._
# Dog Breed Explorer

## Description

Dog Breed Explorer is a React single-page application (SPA) that lets users browse, add, edit, delete, and favorite dog breeds. The app integrates with a Firebase Realtime Database backend to persist data and demonstrates full CRUD functionality. It features a responsive, mobile-first design, React Router for navigation, and styling using Tailwind CSS with DaisyUI.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**  
   ```bash
   git clone https://github.com/logicness-agency/dog-breed-explorer.git
   cd dog-breed-explorer
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Install Tailwind CSS**  
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. **Install DaisyUI**  
   ```bash
   npm install daisyui
   ```

5. **Configuration**  
   All Tailwind and DaisyUI settings are defined in `tailwind.config.js` at the project root.

6. **Configure environment variables (optional)**  
   By default, the app points to the Firebase Realtime Database at:  
   `https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/`.  
   To use a different database, create a `.env` file in the root directory:  
   ```env
   REACT_APP_FIREBASE_DATABASE_URL=https://your-project-id.firebaseio.com
   ```

7. **Run the application**  
   ```bash
   npm run dev
   ```  
   The app will start on `http://localhost:3000` by default.

## Demo

A live demo is deployed on Netlify and available at:

[https://dog-breed-explorer.netlify.app](https://dog-breed-explorer.netlify.app)

## GitHub Repository

- Frontend: https://github.com/logicness-agency/dog-breed-explorer

## Project Presentation

Slides for the project presentation can be found here:

[https://your-slide-url.com](https://your-slide-url.com)

## Resources

- Markdown syntax guide: https://www.markdownguide.org/basic-syntax/  
- Circular Gallery component from React Bits (for a full-screen circular image gallery):  
  https://www.reactbits.dev/components/circular-gallery  
- Text Type Animation from React Bits:  
  https://www.reactbits.dev/text-animations/text-type  
- DaisyUI for extra Tailwind components: https://daisyui.com/

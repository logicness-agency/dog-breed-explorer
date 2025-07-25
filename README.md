# Dog Breed Explorer

## Description

Dog Breed Explorer is a React single-page application (SPA) that lets users browse, add, edit, delete, and favorite dog breeds. The app integrates with a Firebase Realtime Database backend to persist data and demonstrates full CRUD functionality. It features a responsive design with mobile-first principles, React Router for navigation, and Tailwind CSS for styling.

## Installation

To run this project locally on your machine, follow these steps:

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

   This project uses Tailwind CSS for styling. Install it and its peer dependencies, then generate the configuration files:  
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```  
   

4. **Configure environment variables (optional)**  

   By default, the app points to the Firebase Realtime Database at `https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/`.  

   To use the same or a different Firebase database, create a `.env` file in the root directory and add:  
   ```env
   REACT_APP_FIREBASE_DATABASE_URL=https://dog-breeds-8c105-default-rtdb.europe-west1.firebasedatabase.app/
   ```  
   - If you set up your own Firebase project, replace the URL above with your project's database URL, and ensure your Realtime Database has appropriate read/write rules configured.

5. **Run the application**  
   ```bash
   npm run dev
   ```  
   The app will start on `http://localhost:3000` by default.

## Demo

A live demo of this project is deployed on Netlify and available at:

[https://dog-breed-explorer.netlify.app](https://dog-breed-explorer.netlify.app)

## GitHub Repository

- Frontend: https://github.com/logicness-agency/dog-breed-explorer

## Project Presentation

Slides for the project presentation can be found here:


## Resources

- Markdown syntax guide: https://www.markdownguide.org/basic-syntax/  
- Circular Gallery component from React Bits:  
  https://www.reactbits.dev/components/circular-gallery ([reactbits.dev](https://www.reactbits.dev/components/circular-gallery?utm_source=chatgpt.com))  
- Text Type Animation from React Bits:  
  https://www.reactbits.dev/text-animations/text-type ([reactbits.dev](https://www.reactbits.dev/text-animations/text-type?utm_source=chatgpt.com))  

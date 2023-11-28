// import React from 'react';
// import bannerImage from './images/banners/myBanner-1920x595.png'; // Update this path

// function LandingPage() {
//   return (
//     <div>
//       <h1>Welcome to Our Business</h1>
//       <img src={bannerImage} alt="Banner" />
//       {/* You can add more images and content here */}
//     </div>
//   );
// }

// export default LandingPage;



import React from 'react';
import './App.css';
import LandingPage from './LandingPage'; // Import LandingPage component

function App() {
  return (
    <div className="App">
      <LandingPage /> {/* Render the LandingPage component */}
    </div>
  );
}

export default App;

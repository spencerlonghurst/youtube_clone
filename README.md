# youtube_clone
A clone of the front end of Youtube.

Dependencies:
-npm install @mui/material @emotion/react @emotion/styled
-npm install @mui/icons-material
-npm install react-router-dom

Search Bar:
-search 'buff dudes'

/// DEPLOY ///

firebase init
  -Hosting
  -Use an existing project
  -select project
  -public directory: build
  -configure as a single-page app: yes
  -automatic builds and deploys with github: no

  // Run these after any changes //

  -npm run build

  -firebase deploy

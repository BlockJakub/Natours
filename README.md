# Natours

A responsive tourism landing page built as part of Jonas Schmedtmann's Udemy course - modified and extended by Kuba.

## Features

- **Hero Section** - Full-screen background with clip-path polygon and animated call-to-action
- **About Section** - Two-column layout with animated composition of overlapping images
- **Features Section** - Skewed background section with icon feature boxes
- **Tours Section** - Interactive 3D card-flip pricing cards
- **Stories Section** - Background video with shape-outside text wrapping
- **Booking Form** - Styled inputs with floating labels and AJAX submission
- **Popup Modal** - CSS :target based modal with backdrop blur
- **Hamburger Navigation** - Full-screen animated overlay navigation

## Tech Stack

- HTML5 (semantic markup)
- SCSS / Sass (BEM methodology, 7-1 architecture)
- CSS3 animations, transitions, clip-path, perspective
- Node.js + Express (form submission backend)

## Installation

Clone the repo and install dependencies:

    git clone https://github.com/BlockJakub/Natours.git
    cd Natours-1
    npm install

### Development (live server + SASS watcher)

    npm start

### Production build (compile + prefix + compress CSS)

    npm run build

### Run server only

    node server.js
    # -> http://localhost:3000

## License

Educational project based on Jonas Schmedtmann's Udemy course. You may use this for personal and commercial purposes but may not claim the design as your own. Credit to the original author is appreciated.
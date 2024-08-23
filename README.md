# YouTube Clone

A YouTube clone built with React, Material-UI, and RapidAPI. This project demonstrates how to create a modern web application with popular frontend technologies and API integration. The application allows users to search for videos, watch them, and explore related content, similar to the functionality of YouTube.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [API Integration](#api-integration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## Features

- Search for videos using the YouTube API.
- Watch videos in an embedded player.
- Explore related videos and channels.
- Responsive design for both desktop and mobile devices.

## Installation

To get a local copy up and running, follow these simple steps:

### Prerequisites

- Node.js and npm installed on your machine.
- A RapidAPI account for API access.

### Installation Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/adrianhajdin/project_youtube_clone.git
    ```
   
2. **Navigate to the project directory:**
    ```bash
    cd project_youtube_clone
    ```

3. **Install the dependencies:**
    
    npm install
    

4. **Create a `.env` file in the root directory and add your API key:**
    
    REACT_APP_RAPIDAPI_KEY=your_rapidapi_key_here
    

5. **Start the development server:**
    
    npm start
    

6. **Open your browser and navigate to:**
    
    http://localhost:3000
    

## Usage

- Enter a search term in the search bar to find videos.
- Click on any video to watch it.
- Browse related videos and channels in the sidebar.

## Technologies

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework for building responsive and visually appealing designs.
- **React Router**: For navigation between different views.
- **Axios**: For making HTTP requests to the API.
- **RapidAPI**: For fetching video data from the YouTube API.

## API Integration

This project uses the YouTube Data API via RapidAPI to fetch video data, search results, and channel information.

## API Key

To use the YouTube Data API, you need to include your API key in the project. Follow these steps to set it up:

1. **Create a `.env` file** in the root directory of the project if it doesn’t already exist.

2. **Add your API key** to the `.env` file with the following line:
    ```plaintext
    REACT_APP_RAPIDAPI_KEY=your_rapidapi_key_here
    ```

   You can obtain the API key by signing up for a RapidAPI account and subscribing to the YouTube API plan. Make sure to replace `your_rapidapi_key_here` with the actual key you receive.

3. **Restart the development server** after adding the API key to ensure the application can access it.

This step is crucial for the application to fetch video data and function correctly.


### Endpoints Used

- **Search Videos**: To search for videos based on a query.
- **Get Video Details**: To fetch details about a specific video.
- **Get Related Videos**: To retrieve videos related to the one currently being viewed.
- **Get Channel Details**: To get information about a YouTube channel.

#### Screenshots

![Homepage](<public/Screenshots/Screenshot 2024-08-20 at 6.11.30 PM.png>)
![Sidebar](<public/Screenshots/Screenshot 2024-08-20 at 6.11.37 PM.png>)
![Searchbar](<public/Screenshots/Screenshot 2024-08-20 at 6.11.46 PM.png>)
![Video page and details](<public/Screenshots/Screenshot 2024-08-20 at 6.11.58 PM.png>)
![Related Videos](<public/Screenshots/Screenshot 2024-08-20 at 6.12.06 PM.png>)
![Channel detail page](<public/Screenshots/Screenshot 2024-08-22 at 11.00.41 AM.png>)
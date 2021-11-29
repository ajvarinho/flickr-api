I made this small project as a practice in API fetch and React Hooks. It uses API from Flickr and gets the most recent uploaded images. (Note: The images fetched and presented in screenshots and gifs in this readme file are uploaded by Flickr users around the globe, and therefore are their ownership, not mine. Also, the content of some images might be inappropriate; I apologize for that)

Basic idea is to fetch most recent uploads and be able to favorite certain images by saving the image in localStorage and retrieving it on page reload.
I used React Hooks to fetch API data, to build the favourites functionality on app use and (re)load - useState was used for data retrieval from API, infinite scroll and additional data loading, whereas the useEffect managed the favourites functionality and reload. For styling, I used basic CSS and did media queries for smartphones and tablets; the queries and app were tested on latest versions of Mozilla Firefox and Google Chrome.

For application previews, clone or fork this repo to your local machine, and make sure to cd into that folder and install React app. Please check the React instructions on how to install React on your particular device - https://github.com/facebook/create-react-app.



Favourites load/reload


![alt-text](https://github.com/aywar2000/flickr-api/blob/master/public/tru-gif-reload.gif)


Infinite scroll


![alt-text](https://github.com/aywar2000/flickr-api/blob/master/public/inf-scroll.gif)


Media query - smartphones


![alt-text](https://github.com/aywar2000/flickr-api/blob/master/public/ezgif.com-gif-maker(4).gif)




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).





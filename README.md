<H1>About project</H1>

This project is being developed to demonstrate my front end development skills. 
Here you can find how I solve typical cases,
and how I find interesting implementations of my own creative ideas.

You can check what has already been done here: https://vitvin.github.io/SiteAboutGames/

Note!: The project is still in development.

<H1>Idea</H1>

I took as an idea a website for gamers where you could follow popular games,
find out about the latest releases, search for games that you like,
find out information about a particular game: description, screenshots, trailers, etc...

<H1>Tasks</H1>

As I work alone, I don't have strict conditions, so I will describe just the basics - fundament of my WebSite.

First of all I have to think about structure of the project, I found Rest Api which absolutely fits my idea,
and based on the End points, I should make next pages:
 * Pages 
   * Home Page (Just small welcome page)
   * Page with PC Games (Tiles with games for PC, Top of popular games)
   * Page with Browser Games (The same as page for PC games, but for browser)
   * Page with filters (Opportunity to search games by tags, platform, or name)
   * Page of Specific Game (Information about game: description, developer, screenshots, trailer, etc.)

Responsive design and reusable components.

I would like to use gray and blue colors for the WebSite. 

<H1>Stack</H1>

Stack for this project:

Already in use: 
* JavaScript 
* CSS 
* HTML
* React as a framework
* React-router-DOM for client side routing
* Axios
* Rest API [DataSource](https://rapidapi.com/digiwalls/api/free-to-play-games-database)

Will be in use:
* React Transition Group

Of course may be I will use a few more libraries to solve some problems,
Who knows what kind of ideas will inspire me, during development process.

<H1>Developed parts</H1>

<H2>Home Page</H2>

  
I made Home Page with navigation bar, and welcome section in the top of the page. Added tiles with games, and carousel with trailers of fresh released games.

Top of the Home page, welcome section with button, navigation bar.
<img width="923" alt="1Home" src="https://github.com/VitVin/SiteAboutGames/assets/93376524/9c6c00bb-fd35-4854-a434-fd1e72c1c0c0">


Carousel with trailers. I could use some library, but I decided to make my own unique carousel with pictures of games, and Trailer of this game.
User can Click the picture, and watch the Trailer of selected game, when trailer ends, Carousel will play next Trailer from list
<img width="925" alt="CarouselHome" src="https://github.com/VitVin/SiteAboutGames/assets/93376524/3045f915-adc0-4059-92cf-81e2f2eb9c58">

GameTiles. Here you can see the section with game tiles, I made 3 sections: most played games for now, games for PC
and games for browser. 
<img width="919" alt="TilesHome" src="https://github.com/VitVin/SiteAboutGames/assets/93376524/9c7e74ab-0bfb-4ae9-88a0-3786025d050e">

When you hover the mouse over the tile, a short description of the game appears.
<img width="926" alt="TilesHomeHover" src="https://github.com/VitVin/SiteAboutGames/assets/93376524/ac722a14-1f8a-41e4-9ca5-2a1a3b8f3145">

At the bottom of the page you can see Visit Card of the WebSite, and the source of the data in footer section (I have to attribute the source of the data, because this is a condition for using this API)
<img width="928" alt="HomeVisitCard" src="https://github.com/VitVin/SiteAboutGames/assets/93376524/3de24327-dab8-4393-aaa6-779dec089366">

<H2>Specific Game Page</H2>

When you click the tile of some game, you will move to specific game page. Here you can find out all information about game, and watch the trailer.
If you click the button "Play Now" the official game site will be opened.
<img width="929" alt="SpecificGamePage" src="https://github.com/VitVin/SiteAboutGames/assets/93376524/21c140e5-2bab-450d-a0ae-2627636ee0c5">

if you scroll down the page. You will see Minimum System Requirements for this game, this section appears only for PC Game.
<img width="928" alt="SpecificGamePage2" src="https://github.com/VitVin/SiteAboutGames/assets/93376524/bc5f006b-f3e2-4a41-87da-0c89733e8170">

A little bit lower at the page you can find 6 random games from top 100 by popularity, every time games are different.
This solution helps to attract the user's attention to other games, even if he has already chosen a certain one.
<img width="927" alt="SpecificGamePage3" src="https://github.com/VitVin/SiteAboutGames/assets/93376524/f1fa3a1e-268c-44cd-a207-825429a7b0a4">


For now, that's it, but the project is still in development process, you will see a lot of features in future.
Thank you very much for your attention!
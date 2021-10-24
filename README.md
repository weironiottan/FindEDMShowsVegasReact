<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />

<h3 align="center">Find EDM Shows/DJS in Las Vegas Website</h3>

  <p align="center">
    This Web App shows all the clubs in Las Vegas that host edm events. Want to find what date a particular DJ plays at which Clubs?
    You can search by Club Name, Artist Name, Date or just get all the events for all clubs that play EDM Music!
    <br />
    <a href="https://github.com/weironiottan/FindEDMShowsVegasReact"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://www.edmvegas.club">View Demo</a>
    ·
    <a href="https://github.com/weironiottan/FindEDMShowsVegasReact/issues">Report Bug</a>
    ·
    <a href="https://github.com/weironiottan/FindEDMShowsVegasReact/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started/Usage</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<br />

<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

Website: https://www.edmvegas.club/

This Website shows all the different EDM shows and djs playing in Las Vegas. I personally love EDM and I live close enough to Vegas to be able
see the different shows year round.  There was one problem though, it is really hard to find out what club in Vegas plays which  DJ.
As an example I really like Martin Garrix however I didn't know he was playing at a certain date in Vegas. It was not on his website,
neither on any of the other aggregate EDM Las Vegas Websites. I even tried a couple of APIs such as ticket master or bands in town. 
Nothing consistently found all the events a DJ would play in Vegas, unless I physically visited all the different casino club websites

There are give or take 10 clubs that play and host EDM music, I started to look at the event calendar for each club site in vegas and saw
that it would be fairly easy to just scrape the information, store it in a Database and deploy a node server to do that automatically every 24 hrs.

That was Part One of the project, the repo link is here: https://github.com/weironiottan/FindEDMEventsAPIServer

Now that the server was built, and ready for API requests I needed a website to show and query the data. 

That is Part Two of the project, I created a website using React for the framework/app. I decided to focus on React because at work we currently use Angular
for our website apps, and while I am pretty familiar with Angular it's pretty painful to setup properly for a simple  website, and hey the point of side projects is  to explore 
technologies you would  have not have touched to begin with, so React it is! Tailwind for CSS, Axios and React Query to handle the API Requests and state management. 

Currently the Website shows info from the following clubs:
    AYU Nights/Day, Zouk, XS, Omnia, Hakassan, Omnia, Wet Republic, Encore Beach Night/Day, Jewel, Liquid Pool Lounge, Marquee

A current version of this App is deployed on Netlify and you are more then welcome to access it and use it for any purpose. As of now 
I don't have any restrictions for the App. This might change in the future if there are too many requests and I run out of the free allotment
on Netlify. However you could literally fork this project and deploy it to Netlify and have your own custom website. The only thing I request
is that you give credit where credit is due :) 

Don't be shy, if you like it, send me an email! If you don't like it, send me an email! for anything else, send me an email!


### Built With

* [React](https://reactjs.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [React Query](https://react-query.tanstack.com/)
* [Axios](https://axios-http.com/docs/intro)
* [Netlify](https://www.netlify.com/)
* [Google Domains](https://domains.google/)


<p align="right">(<a href="#top">back to top</a>)</p>


### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation
1. Clone the repo
   ```sh
   git clone https://github.com/weironiottan/FindEDMShowsVegasReact.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

<p align="right">(<a href="#top">back to top</a>)</p>




<!-- ROADMAP -->
## Roadmap

- Grab link for guest list for all events
- Grab Link to pre-sale and ticket links for all events
- Page for notifications based on what artist is in town and send it via email/sms **Priority**
- If Artist is not in the list, sign up for it and get notified when they have a scheduled show in Vegas
- Add About Me Page
- Add Prices for each show and list on the site



See the [open issues](https://github.com/weironiottan/FindEDMShowsVegasReact/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact


Project Link: [https://github.com/weironiottan/FindEDMShowsVegasReact](https://github.com/weironiottan/FindEDMShowsVegasReact)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments
For the Readme template:
* [othneildrew](https://github.com/othneildrew/Best-README-Template)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/weironiottan/FindEDMShowsVegasReact.svg?style=for-the-badge
[contributors-url]: https://github.com/weironiottan/FindEDMShowsVegasReact/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/weironiottan/FindEDMShowsVegasReact.svg?style=for-the-badge
[forks-url]: https://github.com/weironiottan/FindEDMShowsVegasReact/network/members
[stars-shield]: https://img.shields.io/github/stars/weironiottan/FindEDMShowsVegasReact.svg?style=for-the-badge
[stars-url]: https://github.com/weironiottan/FindEDMShowsVegasReact/stargazers
[issues-shield]: https://img.shields.io/github/issues/weironiottan/FindEDMShowsVegasReact.svg?style=for-the-badge
[issues-url]: https://github.com/weironiottan/FindEDMShowsVegasReact/issues
[license-shield]: https://img.shields.io/github/license/weironiottan/FindEDMShowsVegasReact.svg?style=for-the-badge
[license-url]: https://github.com/weironiottan/FindEDMShowsVegasReact/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/chrisgabrielsson
[product-screenshot]: find-edm-shows/src/images/product-image.png
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
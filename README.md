# Rancid Tomatillos

## Abstract:

Rancid Tomatillos is a project that focuses on building a user friendly display for recently released movies. A user can 'click' a movie to reveal more details about it. We focused our efforts on creating an easy to read, easy to use, web app for the user while using new techniques like, web responsiveness, PropTypes usage, Cypress testing, and React to flesh out this project in a timely manner. 

Web development tools, including React and Cypress, were used to streamline our project to allow us take on more robust challenges. Implementing React allow us to manipulate the DOM in quick and decisive actions so that our application can react to those changes on a near intantanous level, without the need to manipulate the DOM directly as with past projects.

Rancid Tomatillos consists of multiple iterations, focusing on different aspects of data processing and dashboard display, including movie presentation, displaying individual movie details, routing to display unique URL paths for each movie, and the implementation of a responsive website design that can adapt to changing webpage sizes. It encourages fetching data from provided endpoints instead of hardcoded data files.

The project also provides an extension option for building a robust testing suite using Cypress, ensuring the project's quality and functionality. In summary, Rancid Tomatillos aims to deliver a user-friendly movie infomation webpage for displaying data while fostering collaboration and professionalism among team members.


## Application link:

[Rancid Tomatillos GitHub Repository](https://github.com/JoeyStewart/rancid-tomatillos-react)

## Installation Instructions:
1. Click the green `code` button.
2. Copy SSH to your clipboard.
3. Open up the terminal.
4. Change into the directory you wish to clone the app into with the cd command.
5. Use the git clone command followed by pasting the copied SSH key.
6. Change into the cloned directory with the cd command.
7. Install dependencies by typing npm install into the terminal
8. Type npm install react react-dom into the terminal
9. Type npm start into the terminal
10. Copy the link it provides. It will look like similiar to this: http://localhost:3000/#/
11. Paste it into your web browser of choice
12. Enjoy!

## Preview of App:
![](https://github.com/JoeyStewart/rancid-tomatillos-react/blob/main/Rancid.gif)
![](https://github.com/JoeyStewart/rancid-tomatillos-react/blob/main/RT_small_breakpoint.png)
![](https://github.com/JoeyStewart/rancid-tomatillos-react/blob/main/RT_medium_breakpoint.png)


## Context:
This was the first group project in Mod 3 that we had to assemble. We used fetch requests pull data so that we manipulate it into the display that we desired and allow it to popluate it onto the movies display page the movie's details page. We had 11 days to complete the project and spent about 70 cumulatively hours working collaboratively. Part of the difficulty of the project came from learning new concepts such as React, routing, and Cypress testing. Then having to utilize them immediately. Even in spite of this, the project remained on schedule with little delays. 

## Contributors:

[Deanna Stevens](https://github.com/dsstevens)  
[Joey Stewart](https://github.com/JoeyStewart)  
[Dan Lavery](https://github.com/wlavery22)

## Learning Goals:

* Use routing, fetch calls, and useState to work the data into a way that satisfies all expectations.

* Create a user interface that is easy to use and displays information in a clear way.

* Write DRY, reusable code that follows SRP and trends toward function purity

* Implement a robust testing suite using Cypress.

* Make network requests to retrieve data.

* Collaborate productively and professionally as a team. Ensure all team members are able to be heard and contribute throughout the project.

## Major Wins:
### Joey:
Being able to use CSS along with the creation of a resposive website was very rewarding. CSS is something that I have struggled with in the past, and I have used it extensively for this project. I do feel my skills have been very much strengthened in this area. I am very satisfied with the look of the project and how it can morph and change with the responsive design. I much more confident going forward in this area. 

### Deanna: 
- Learning Proptypes and incorporating them for checking data types passed into components
- Building our first React group project utilizing API calls and responsiveness
- Designing component architecture with React and producing quicker CSS rendering
- Learning Router and implementing v. 6.20.1

### Dan:
Learning to use and becoming more familiar with React, Cypress and Router were major wins. Seeing how React components and JSX enable us to create more complex functionality and render more interesting viewable web apps more easily was exciting. Cypress' End to End testing was a little more complex to learn, but so much more powerful in allowing us to test almost everything we can build. Some of the wins were small, like learning how much better Cypress works with Electron as its browser for E2E testing. Stepping back and thinking about the number of new tools this project required us to use and even teach ourselves to use is a little overwhelming. State, PropTypes, Responsive layouts, Router, Cypress, React - no project at Turing we did so far required this many new techs or learning while building.

## Challenges and How We Overcame Them:
### Joey:
Understanding routing is a challenge. It looked so simple on its onset, but I quickly learned that it really has to be used in mind from the start of the project instead of implementing it mid-way through. I relied on cohort members and mentors to provide guidance as well as referring back to past assignements and class projects. It allowed me to learn much more about React than I anticipated at first due to my pure inexperience with routing. All in the end, I learned a lot and look forward to properly using it in the future. 

### Deanna: 
- Refactoring the fully functional single-page app to use Router and discovering a bug based on how we were assigning our state variable
- After doing research and reaching out to mentors, was able to implement a more current model of React Router which enables more straightfoward routing and bypasses the issues we had with managing the application's state.
- Using the recommended router, createBrowserRouter and learning its structure -- opted for the almost identical createHashRouter method to enable deployment.

### Dan:
Of course learning while building has required a great deal of refactoring. Our team handled this well. We took this as an opportunity to learn as we redid the project over and over again. It was interesting to see how new tools increased the performance of the app, like adding router so that the user could navigate not just by clicking on links, but also by using the back and forward arrows at the upper left-hand corner of the page. For me personally, one challenge I had was trying to figure out how to handle errors and display them to the user in different situations. When dealing with error handling for incorrect URL's or paths, I was able to use Router to guide the user (via a created route) to the display of an error message. However, when dealing with the possibility of an error indicating a server problem I needed a different way to trigger the display of the error message. With the help of a mentor I realized that since the requested data from the API would not be coming through for us to display on the page (in the event of server problems) we could use conditional logic and useState to cause the error message to display by including this logic in the return statement we were using to render the App component.
As a team we found that there were parts of the project that benefitted from synchronous work and parts that were more efficiently done asynchronously. We responded to this challenge by finding a good balance of synchronous and asynchronous work while keeping in constant communication via slack



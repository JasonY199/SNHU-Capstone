# Global Traveler Full-Stack Application

**Global Traveler** is a full-stack application I developed as a personal project, integrating various concepts I’ve learned across multiple areas of software development. Instead of tackling three separate projects, I decided to focus on creating a comprehensive single application that reflects my skills in software engineering, data structures, algorithms, and database management.

## Code Review

A code review performs the function of quality assurance on a project by reviewing its source code and output. This is critical to the success of computer science professionals as it ensures consistency in the development of a project and allows for a higher level of coding standards to be met.

You can watch the code review [here](https://youtu.be/6sVTrWrrGtY?si=KK9zsT2hwVFR0JHC).



## Project 1: Front-End Redesign (Software Engineering and Design)

The first part of this project was a complete overhaul of the front-end of the Global Traveler app. Originally built with HTML, CSS, and JavaScript, the front-end was re-engineered using **Next.js 14**, **TypeScript**, and **Tailwind CSS**. While the initial version was functional, it had several limitations, including a less appealing design and difficult maintenance due to hard-coded content. Updates required taking the entire site offline, which was disruptive.

### Key Improvements

- **Better Visual Appeal**: Tailwind CSS provided a clean, modern, and user-friendly design.
- **Easier Maintenance**: The switch to Next.js and TypeScript laid a strong foundation for smooth updates without downtime.
- **Scalability**: Next.js’s component-based structure ensures the app can evolve and grow without becoming overly complex.

### Reflection

This redesign was a significant learning experience. I learned how to effectively migrate a static site to a dynamic, modern web framework, and how to leverage TypeScript for safer, more reliable code. While the project achieved most of its goals, including improved usability, there’s still room for further optimization, particularly in accessibility and performance across a wider range of devices.

### Courses That Contributed

- **CS 465: Full-Stack Development**: This course, which focused on developing full-stack applications using the MEAN stack, laid the groundwork for my understanding of Next.js, making the transition to the MERN stack a natural progression.

## Project 2: Custom Sorting with Data Structures and Algorithms

The second enhancement focused on implementing custom sorting functionality using Data Structures and Algorithms. This was directly inspired by my coursework in **CS 300: Data Structures and Algorithms** and **CS 340: Client/Server Development**. Specifically, I implemented the **Quick Sort** algorithm to sort travel options by price, rather than relying solely on MongoDB’s built-in sorting features or Next.js 14’s capabilities.

Initially, the application relied on MongoDB for sorting, which was adequate but somewhat abstracted. By implementing Quick Sort, I gained more control over the sorting process, allowing for more detailed and hands-on logic. This custom algorithm enables users to sort travel options by both **ascending and descending price**.

The choice to implement Quick Sort wasn’t about selecting the most efficient algorithm but rather about deepening my understanding of algorithmic processes and applying them in a real-world context. By coding and integrating this sorting method myself, I gained valuable insights into the mechanics of sorting algorithms and how they can be effectively tied into both the front-end and back-end of the application.

## Project 3: Database Integration for Dynamic Content

The third and final enhancement involved integrating a database to manage and deliver dynamic content. Initially, the "Destinations" page was a static entity, with all details hard-coded into a JSON file. This approach, while functional, wasn’t scalable, lacked flexibility, and made updates cumbersome.

To address these issues, I integrated **MongoDB** as the backend database. This shift from static data to a dynamic database environment was a significant upgrade, allowing the "Destinations" page to be dynamically populated with up-to-date content. Now, every time a user visits the page, they see current information fetched directly from the database.

This MongoDB integration didn’t just improve data management; it transformed the user experience by making the site more interactive and responsive. Instead of manually editing a JSON file for updates, I can now manage data within MongoDB, streamlining the update process and reducing errors.

Furthermore, this enhancement significantly boosted the application's scalability. With MongoDB, Global Traveler can easily expand to include new destinations, additional travel details, and even user-generated content in the future. This database-driven approach not only supports the current needs of the application but also provides a strong foundation for future growth.

The classes that contributed to this enhancement were CS 300: Data Structures and Algorithms (where I learnt how to structure my data and use the most efficient database structure) and also CS 465: Full-Stack Development. Additionally, CS 340: Client/Server Development assisted me in learning about MongoDB and how to put it together with the front-end. 

## Additional Information

Click [here](ProfessionalSummary.md) to view my professional Summary.

Click [here](HowToRun.md) to view instructions on how to run this project locally.

Click [here](https://global-traveler.vercel.app/) to view live site hosted on Vercel.

## Journals and Prompts

### Module 1

- [Assignment](CS499%20M1%20Assignment.md)

### Module 2

- Journal
- [Code Review](https://youtu.be/6sVTrWrrGtY?si=KK9zsT2hwVFR0JHC)

### Module 3

- Journal
- Milestone Prompts

### Module 4

- Journal
- Milestone Prompts

### Module 5

- Journal
- Milestone Prompts

### Module 6

- Journal

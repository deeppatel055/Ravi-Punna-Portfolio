import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';
import SwipeableImageGallery from './../Component/Swappable/SwipeableImageGallery ';

// Assets for project-management
import ProjectImage1 from '../assets/Project1/image1.png';
import ProjectImage2 from '../assets/Project1/image2.png';
import ProjectImage3 from '../assets/Project1/image3.png';
import ProjectImage4 from '../assets/Project1/image4.png';
import ProjectImage5 from '../assets/Project1/image5.png';
import ProjectImage6 from '../assets/Project1/image6.png';
import ProjectImage7 from '../assets/Project1/image7.png';

import DairyImage1 from '../assets/Project2/image1.png';
import DairyImage2 from '../assets/Project2/image2.png';
import DairyImage3 from '../assets/Project2/image3.png';
import DairyImage4 from '../assets/Project2/image4.png';
import DairyImage5 from '../assets/Project2/image5.png';
import DairyImage6 from '../assets/Project2/image6.png';

import TodoImage1 from '../assets/Project3/image1.png'
import TodoImage2 from '../assets/Project3/image2.png'
import TodoImage3 from '../assets/Project3/image3.png'
import TodoImage4 from '../assets/Project3/image4.png'

import MovieImage1 from '../assets/Project4/image1.png'
import MovieImage2 from '../assets/Project4/image2.png'
import MovieImage3 from '../assets/Project4/image3.png'
import MovieImage4 from '../assets/Project4/image4.png'
import MovieImage5 from '../assets/Project4/image5.png'
import MovieImage6 from '../assets/Project4/image6.png'


const projectData = {
    'project-management': {
        title: 'Project Management',
        images: [ProjectImage1, ProjectImage2, ProjectImage3, ProjectImage4, ProjectImage5, ProjectImage6, ProjectImage7],
        content: (
            <div className="space-y-4">
                <p>
                    This Project Management website is a full-stack application built using React for the frontend, Node.js for the backend, and MySQL as the database. It is designed to help teams manage and monitor their projects and tasks efficiently with real-time updates and intuitive interfaces.
                </p>
                <p>
                    Admins can create multiple projects and define essential details like project title, description, start date, due date, and status. Each project can contain multiple tasks. Tasks support fields such as title, description, priority level, due date, and status.
                </p>
                <p>
                    User management is built with role-based access: Super Admin auto-assigns to all, Admin can manage users, Write can update assigned tasks, and Read can only view.
                </p>
                <p>
                    Node.js + Express handles API requests; MySQL stores data. React frontend communicates via REST APIs. Features like real-time updates and status tracking enhance productivity.
                </p>
                <p>
                    The system is scalable and can be extended with notifications, file attachments, user comments, and performance dashboards.
                </p>
            </div>
        ),
    },

    'milk-dairy': {
        title: 'Milk Dairy',
        images: [DairyImage1, DairyImage2, DairyImage3, DairyImage4, DairyImage5, DairyImage6],
        content: (
            <div className="space-y-4">
                <p>
                    I designed and developed a full-featured milk-based e-commerce platform using the MERN stack, tailored specifically for selling dairy products like milk, curd, and buttermilk. The system supports both individual and bulk purchases in the form of crates, streamlining the ordering experience for customers.
                </p>
                <p>
                    The application supports role-based access with separate dashboards and functionalities for Admin, Vendor, Delivery Personnel, and Cashier. Admin manages inventory and users, vendors handle listings, delivery agents manage routes, and cashiers verify offline orders.
                </p>
                <p>
                    Customers can browse and add items to the cart, choose crates, and place orders. It supports both online (UPI, card) and offline (Cash on Delivery) payments. The platform is responsive and secure.
                </p>
                <p>
                    This project highlights my skills in building scalable, role-driven e-commerce systems with advanced cart/payment flows and intuitive design using the MERN stack.
                </p>
            </div>
        ),
    },
    'to-do': {
        title: 'To-Do',
        images: [TodoImage1, TodoImage2, TodoImage3, TodoImage4],
        content: (
            <div className="space-y-4">
                <p>
                    Designed and developed a responsive Task Management web application using React to help users efficiently organize and track their daily activities. The interface is intuitive, offering a clean layout and dynamic components for smooth interaction and a seamless user experience.        </p>

                <p>
                    The app allows users to create and manage multiple tasks in real-time. Tasks are displayed in a structured format with support for editing and deletion. Each task card updates automatically as the user interacts, thanks to React’s efficient state handling and component-based architecture.
                </p>

                <p>
                    Implemented features like task filtering, search functionality, and a collapsible sidebar to enhance usability and accessibility. With a mobile-responsive layout and interactive feedback, this application offers a modern and reliable solution for everyday task tracking.


                </p>



            </div>
        ),

    },
    'moviebly': {
        title: 'Movibly',
        images: [MovieImage1, MovieImage2, MovieImage3, MovieImage4, MovieImage5, MovieImage6],
        content: (
            <div className="space-y-4">
                <p>
                    I developed a dynamic movie website using React and integrated it with The Movie Database (TMDB) API to deliver real-time movie data. The application fetches trending, upcoming, and top-rated movies, giving users access to updated content from one of the most trusted movie databases. With a clean and modern UI, the platform ensures a smooth browsing experience across all devices.      </p>

                <p>
                    Users can explore movies by genre, search by title, and view detailed information about each film, including overviews, release dates, ratings, and posters. The interface is built entirely with React, taking advantage of components, state management using hooks, and React Router for seamless navigation between pages without reloading.
                </p>

                <p>
                    The project also focuses on performance and responsiveness. I used lazy loading for images, conditional rendering, and efficient API handling to ensure fast load times and optimal user experience. Styling was done with Tailwind CSS to keep the UI consistent and responsive.

                </p>
                <p>This project showcases my skills in working with third-party APIs, managing asynchronous data in React, and building scalable front-end applications. It also reflects my ability to design interactive UIs that are both functional and visually engaging.

                </p>



            </div>
        ),


    },

}
const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectData[id];

    if (!project) {
        return <div className="text-center text-red-600 text-xl mt-10">Project not found</div>;
    }

    return (
        <>
            <Navbar title={project.title} />
            <SwipeableImageGallery images={project.images} content={project.content} />
        </>
    );
}

export default ProjectDetails 

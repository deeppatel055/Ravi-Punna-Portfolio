import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';

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
import SwipeableImageGallery from './../Component/Swappable/SwipeableImageGallery ';

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
    }

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

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const items = [
  {
    id: 1,
    color: "from-pink-300 to-blue-300",
    title: "Visutation",
    desc: "Visutation is a Sorting Visualizer. It shows visually working of different Sorting Algorithms.",
    img: "/projects/Visutation/darsh-visutation.png",
    link: "https://darsh-visutation.vercel.app/",
    details: {
      description: "A dynamic sorting algorithm visualizer that helps users understand how different sorting algorithms work through interactive animations.",
      features: [
        "Interactive visualization of popular sorting algorithms",
        "Real-time speed control for animations",
        "Step-by-step execution mode",
        "Algorithm complexity information",
        "Responsive design for all devices"
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Framer Motion",
        "TailwindCSS"
      ],
      images: [
        "/projects/Visutation/darsh-visutation.png"
      ]
    }
  },
  {
    id: 2,
    color: "from-red-300 to-blue-300",
    title: "NextJs eCommerce",
    desc: "A modern eCommerce platform built with Next.js, featuring a responsive design, dynamic product catalog, and secure payment integration with Stripe.",
    img: "/projects/client-ecommerce/client-home.png",
    link: "",
    details: {
      description: "A full-featured eCommerce platform built with Next.js, offering a seamless shopping experience with secure payment processing.",
      features: [
        "Responsive design for all devices",
        "Dynamic product catalog",
        "Shopping cart functionality",
        "User authentication",
        "Secure payment processing"
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "Stripe",
        "Clerk Auth"
      ],
      images: [
        "/projects/client-ecommerce/client-home.png",
        "/projects/client-ecommerce/client-store.png",
        "/projects/client-ecommerce/client-modal.png",
        "/projects/client-ecommerce/client-cart.png"
      ]
    }
  },
  {
    id: 3,
    color: "from-blue-300 to-violet-300",
    title: "Admin Dashboard",
    desc: "A comprehensive admin dashboard with advanced analytics, user management, and real-time data visualization built using Next.js and TailwindCSS.",
    img: "/projects/Admin-ecommerce/admin-Product-Edit.png",
    link: "",
    details: {
      description: "A powerful admin dashboard for managing the eCommerce platform, providing comprehensive data visualization and management tools.",
      features: [
        "Product management",
        "Category and size management",
        "Order tracking and management",
        "Store settings configuration",
        "Billboard management",
        "Analytics dashboard"
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "MySQL",
        "TailwindCSS",
        "Clerk Auth"
      ],
      images: [
        "/projects/Admin-ecommerce/admin-Product-Edit.png",
        "/projects/Admin-ecommerce/admin-Product.png",
        "/projects/Admin-ecommerce/admin-category.png",
        "/projects/Admin-ecommerce/admin-billboards.png",
        "/projects/Admin-ecommerce/admin-sizes.png",
        "/projects/Admin-ecommerce/admin-color.png",
        "/projects/Admin-ecommerce/admin-store.png"
      ]
    }
  },
  {
    id: 4,
    color: "from-violet-300 to-purple-300",
    title: "Agency Project Tracker",
    desc: "A comprehensive project management system for agencies, featuring user roles, project tracking, and detailed analytics.",
    img: "/projects/Agency-project-tracker/home.png",
    link: "",
    details: {
      description: "A robust project management system designed for agencies to track projects, manage teams, and monitor progress efficiently.",
      features: [
        "User role management",
        "Project tracking and analytics",
        "Team management",
        "Permission-based access control",
        "Settings customization",
        "User authentication"
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "MySQL",
        "TailwindCSS"
      ],
      images: [
        "/projects/Agency-project-tracker/home.png",
        "/projects/Agency-project-tracker/Login.png",
        "/projects/Agency-project-tracker/signup.png",
        "/projects/Agency-project-tracker-Dashboard/dashboard.png",
        "/projects/Agency-project-tracker-Dashboard/projects.png",
        "/projects/Agency-project-tracker-Dashboard/permissions.png",
        "/projects/Agency-project-tracker-Dashboard/settings.png",
        "/projects/Agency-project-tracker-Dashboard/users.png",
        "/projects/Agency-project-tracker-Dashboard/user.png"
      ]
    }
  },
  {
    id: 5,
    color: "from-green-300 to-blue-300",
    title: "Project Tracker-Dashboard",
    desc: "A comprehensive project management system for agencies, featuring user roles, project tracking, and detailed analytics.",
    img: "/projects/Agency-project-tracker/home.png",
    link: "",
    details: {
      description: "A robust project management system designed for agencies to track projects, manage teams, and monitor progress efficiently.",
      features: [
        "User role management",
        "Project tracking and analytics",
        "Team management",
        "Permission-based access control",
        "Settings customization",
        "User authentication"
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "MySQL",
        "TailwindCSS"
      ],
      images: [
        "/projects/Agency-project-tracker/home.png",
        "/projects/Agency-project-tracker/Login.png",
        "/projects/Agency-project-tracker/signup.png",
        "/projects/Agency-project-tracker-Dashboard/dashboard.png",
        "/projects/Agency-project-tracker-Dashboard/projects.png",
        "/projects/Agency-project-tracker-Dashboard/permissions.png",
        "/projects/Agency-project-tracker-Dashboard/settings.png",
        "/projects/Agency-project-tracker-Dashboard/users.png",
        "/projects/Agency-project-tracker-Dashboard/user.png"
      ]
    }
  },{
    id: 6,
    color: "from-green-300 to-blue-300", 
    title: "agriKart-Admin",
    desc: "A comprehensive e-commerce admin dashboard for managing an agricultural products marketplace, with complete control over products, orders, and users.",
    img: "/projects/agriadmin/01-dashboard.png",
    link: "",
    details: {
      description: "An advanced admin dashboard for agriKart e-commerce platform that enables complete management of the agricultural marketplace. Features include product catalog management, order processing, user management, and analytics tracking for an efficient operation.",
      features: [
        "product management",
        "Inventory tracking",
        "Order processing and fulfillment workflow",
        "Customer account management",
        "Sales analytics and reporting",
        "Category and tag management",
        "Inventory alerts and low stock notifications",
        "Order status tracking",
        "User role and permissions management",
        "Product image gallery management",
        "Bulk product import/export",
        "Order history and invoice generation",
        "Customer support ticket system"
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "TailwindCSS",
        "JWT Authentication",
      ],
      images: [
        "/projects/agriadmin/01-dashboard.png",
        "/projects/agriadmin/02-products.png",
        "/projects/agriadmin/03-addproduct.png",
        "/projects/agriadmin/04-editproduct.png",
        "/projects/agriadmin/05-categories.png",
        "/projects/agriadmin/06-order.png",
        "/projects/agriadmin/07-orderdetail.png",
        "/projects/agriadmin/08-promo.png",
        "/projects/agriadmin/09-promogen.png",
        "/projects/agriadmin/10-review.png",
        "/projects/agriadmin/11-user.png",
      ]
    }
  },{
    id: 7,
    color: "from-green-300 to-blue-300",
    title: "agriKart-User",
    desc: "A comprehensive e-commerce platform for buying and selling agricultural products, featuring user roles, project tracking, and detailed analytics.",
    img: "/projects/agriuser/01-home.png",
    link: "",
    details: {
      description: "A robust project management system designed for agencies to track projects, manage teams, and monitor progress efficiently.",
      features: [
        "User Dashboard",
        "User Profile Management",
        "User Address Management",
        "User Order Management",
        "User Order Details Management",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "TailwindCSS",
      ],
      images: [
        "/projects/agriuser/01-home.png",
        "/projects/agriuser/02-products.png",
        "/projects/agriuser/03-productdetails.png",
        "/projects/agriuser/04-info.png",
        "/projects/agriuser/05-category.png",
        "/projects/agriuser/06-about.png",
        "/projects/agriuser/07-contact.png",
        "/projects/agriuser/08-cart.png",
        "/projects/agriuser/09-checkout.png",
        "/projects/agriuser/10-payment.png",
        "/projects/agriuser/11-profile.png",
        "/projects/agriuser/12-profileedit.png",
        "/projects/agriuser/13-order.png",
        "/projects/agriuser/14-login.png",
        "/projects/agriuser/15-signup.png",
      ]
    }
  }
];

const useProjectItem = (id: string) => {
  return items.find((item) => item.id === parseInt(id));
};

const ProjectPage = () => {
  const router = useRouter();
  const params = useParams();
  const item = useProjectItem(params.id as string);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!item) {
    return (
      <div className="h-full w-full flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Project Not Found</h1>
          <button
            onClick={() => router.back()}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const slides = item.details.images.map((image) => ({
    src: image,
    width: 3840,
    height: 2160,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8 max-w-6xl text-white h-full overflow-y-auto"
    >
      {/* Header Section */}
      <div className="mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          {item.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-300"
        >
          {item.desc}
        </motion.p>
      </div>

      {/* Image Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {item.details.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gray-800 cursor-pointer group"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={image}
                alt={`${item.title} screenshot ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                quality={100}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={slides}
          plugins={[Zoom]}
          zoom={{
            maxZoomPixelRatio: 5,
            scrollToZoom: true,
            wheelZoomDistanceFactor: 300,
          }}
          carousel={{
            finite: true,
          }}
          animation={{
            swipe: 250,
          }}
          styles={{
            container: {
              backgroundColor: "rgba(0, 0, 0, .9)",
            },
          }}
        />
      </motion.div>

      {/* Project Details */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">About the Project</h2>
          <p className="text-gray-300 mb-6">
            {item.details.description}
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              {item.details.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {item.details.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm border border-gray-700"
              >
                {tech}
              </motion.span>
            ))}
          </div>
          {item.link && (
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
            >
              View Live Project
            </Link>
          )}
        </motion.div>
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 flex justify-center"
      >
        <button
          onClick={() => router.back()}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 font-semibold"
        >
          <span>←</span> Back to Projects
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectPage;
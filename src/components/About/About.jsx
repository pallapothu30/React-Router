import React from "react";
import { Link } from "react-router";
export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 xl:px-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center">
            <img
              className="w-72 md:w-96 rounded-lg shadow-lg"
              src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team working"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              We Build Modern Web Experiences with React
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Welcome to our digital space where passion meets precision. We are a team of developers dedicated to creating fast, intuitive, and scalable web applications using the latest in React and frontend technology.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Whether you're a startup looking to launch your MVP or a business aiming to modernize your platform, we help bring ideas to life with beautiful interfaces and performant code.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              From single-page apps to full-stack solutions, our mission is to deliver exceptional digital experiences that engage and inspire.
            </p>
            <div className="mt-6">
              <a
                href="#contact"
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-orange-700 transition"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

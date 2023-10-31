/*
 *   Copyright (c) 2023 Dilshan Ramesh
 *   All rights reserved.
 */
"use client";
import { motion } from 'framer-motion';
import React, { FC, Suspense } from 'react';

//components
import ProjectCard from '@/components/projects/projectCard';
import ProjectsListLoading from './components/ProjectsListLoading';

//projects
import image from "@/assets/images/projects/wasthi.png";
import coffee from '@/assets/images/projects/coffee-app.png';
import dominos from '@/assets/images/projects/dominos.png';
import weather from '@/assets/images/projects/weather.png';
import facebook from '@/assets/images/projects/facebook.png';
import eCommerce from '@/assets/images/projects/e-commerce.png';
import tourPlanner from '@/assets/images/projects/tour-planner.png';
import shoppingCart from '@/assets/images/projects/shopping-cart.png';
import wasthiProduction from '@/assets/images/projects/wasthi-production.png';

const Page: FC = () => {
  return (
    <div className="projects bg-white-50">
      <div className="container mx-auto max-w-4xl">
        <div>
          <p className="text-4xl py-4 text-gray-600 max-sm:text-xl">Projects</p>
          <h2 className="text-6xl max-sm:text-4xl max-w-4xl">
            The bit of work I do, and the business I help.
          </h2>
        </div>

        <Suspense fallback={<ProjectsListLoading/>}>
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-2 max-sm:grid-cols-1 gap-6 py-10"
          >
            <div className="grid gap-4">
              <ProjectCard
                title={'Dominos Pizza Clone App'}
                intro={"The Flutter-powered Domino's Pizza Clone App is a sophisticated mobile application that mirrors the renowned Domino's Pizza ordering experience. Leveraging the versatility of Flutter, it ensures a smooth and consistent user experience across both Android and iOS platforms."}
                image={dominos}
              />

              <ProjectCard
                title={'Coffee Shop App'}
                intro={'A concept mobile app for a coffee shop and built with Flutter, brings the charm of a local cafe to your fingertips. This mobile application, compatible with both Android and iOS, offers a seamless experience for coffee enthusiasts.'}
                image={coffee}
              />

              <ProjectCard
                title={'Weather App'}
                intro={"The Weather App crafted with Flutter is a sleek and efficient mobile application designed to provide up-to-date weather information at your fingertips. Built using Flutter's versatile framework, it ensures a seamless experience on both Android and iOS platforms."}
                image={weather}
              />

              <ProjectCard
                title={'Grocery Shopping App'}
                intro={'A concept for user onboarding for Grocery Shopping App which is developed using flutter. The onboarding flow including authenication and welcome screens for seemless user experince.'}
                image={eCommerce}
              />
            </div>
            <div className="grid gap-4 sm:pt-40">
              <ProjectCard
                title={'Facebook Clone App'}
                intro={"The Facebook Clone App developed with Flutter is a dynamic mobile application that replicates the renowned Facebook's key functionalities. Leveraging the power of Flutter, it ensures a seamless experience on both Android and iOS devices. "}
                image={facebook}
              />

              <ProjectCard
                title={'Tour Planner App'}
                intro={'The Tour Planner App, concept mobile application which is powered by Flutter. This mobile application simplifies trip planning & all in one activities.'}
                image={tourPlanner}
              />

              <ProjectCard
                title={'Shopping Cart App'}
                intro={'This is part of a E-commerce app which contain the all inclusive Shopping Cart build with Flutter and dart. Streamline your shopping experience with this efficient and modern Flutter-based app.'}
                image={shoppingCart}
              />

              {/* <ProjectCard
              title={'Keells Super Clone App'}
              intro={'Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!'}
              image={image}
            /> */}

              {/* <ProjectCard
              title={'Tesla Car App'}
              intro={'Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!'}
              image={image}
            /> */}
              {/* <ProjectCard
              title={'Wasthi Production App'}
              intro={'Jobriver is a Polish employment platform. It often helps developers to find a job that suits them easily by filtering!'}
              image={wasthiProduction}
            /> */}
            </div>
          </motion.div>
        </Suspense>
      </div>
    </div>
  );
}

export default Page
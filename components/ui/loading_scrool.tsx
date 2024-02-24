"use client";
import { cn } from "../../lib/utils";
import { motion, MotionValue } from "framer-motion";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("sticky top-80", className)}>


    {/*ici mon pierre il vas falloir mettre le text devant j'ai essayer pleins de trucs et je pense que je n'ai juste pas les compétence donc je vais continuer la boutique comme ça*/}
      <p className="text-lg md:text-7xl font-normal pb-4 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300">
        {title || `Build with Aceternity UI`}
      </p>
      <p className="text-xs md:text-xl font-normal text-center text-neutral-400 mt-4 max-w-lg mx-auto">
        {description ||
          `Scroll this component and see the bottom SVG come to life wow this
        works!`}
      </p>


      <div className="w-full h-[890px] -top-60 md:-top-40  flex items-center justify-center bg-red-transparent absolute ">
        <button className="font-bold bg-white rounded-full md:px-4 md:py-2 px-2 py-1 md:mt-24 mt-8 z-30 md:text-base text-black text-xs  w-fit mx-auto ">
          acheter maintenant {/*jsp faire en sorte que ca nous envoie vers le robot*/}
        </button>

      </div>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
        className=" absolute -top-60  md:-top-40 w-full"
      >
        
        <motion.path
          d="M141.008174,194.775204q54.359673,22.479564,88.692098-6.539509q25.617877-20.260357,13.896458-29.019075c-11.721419-8.758718-17.365497-29.534168-33.514986-22.070844s-117.787922,102.814618-166.348775,68.25613-21.042995-81.190444-18.392371-94.414169s47.0786-39.377941,55.585832-46.594005s37.375437,7.541914,40.871934,17.983651q3.496497,10.441737-10.626703,39.645777-4.829955-2.192951,0-11.035423c4.829955-8.842472,43.37084-5.815249,38.828338,11.035423q-4.542502,16.850672-54.359673,27.976839l15.531335,19.843324"
          stroke="#7aa95c"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
          transition={transition}
        />
        <motion.path
          d="M133.651226,65.211172c25.842803-.310294,59.384085,17.425552,57.629428,51.089918"
          stroke="#7aa95c"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
          transition={transition}
        />
        <motion.path
          d="M27.156314,193.442962c11.009962,11.297494,10.684329.826415,25.574442,14.55776c3.386177,13.694048-3.943265,34.131024-25.574442,32.066418c11.263871,1.636221,30.973329,2.421982,29.902425,12.787222c15.917088,18.023523-13.974064,33.676028-32.656596,33.836956q0,.786906,2.754171-93.248356"
          transform="matrix(.891617 0 0 0.879286-5.132993 25.057427)"
          stroke="#B1C5FF"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
          transition={transition}
        />
        <motion.path
          d="M108.207626,286.691318q1.573812-93.248356,2.360718-93.248356q11.717232-12.197041,25.574444,9.836325t-25.574444,26.361349" 
          transform="matrix(.891617 0 0 0.879286-13.321674 31.33704)" 
          stroke="#B1C5FF" 
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
          transition={transition}
        />
        <motion.path
          d="M163.684497,198.164398q-3.541077,88.52692,7.475606,88.52692q27.935161,14.55776,29.508973-39.345298t0-48.78817" 
          transform="matrix(.891617 0 0 0.879286-22.747114 26.124941)"
          stroke="#B1C5FF"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
          transition={transition}
        />
        <motion.path
          d="M213.653025,279.609165q1.180359-81.051313,12.590495-76.329878q18.492288-7.082155,16.131571,18.49229c-2.360717,25.574445,6.295248,30.843348,8.655966,16.20858q2.360718-14.634769,9.442872-34.700872q9.442871-12.590495,13.377401,0t-1.573812,83.41203"
          transform="matrix(.891617 0 0 0.879286-16.787033 27.901176)"
          stroke="#B1C5FF"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
          transition={transition}
        />
        <motion.path
          d="M108.207626,286.691318q1.573812-93.248356,2.360718-93.248356q11.717232-12.197041,25.574444,9.836325t-25.574444,26.361349"
          transform="matrix(.891617 0 0 0.879286 152.715493 31.33704)"
          stroke="#B1C5FF"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[4],
          }}
          transition={transition}
        />

        {/* Gaussian blur for the background paths */}

        <path
          d="M141.008174,194.775204q54.359673,22.479564,88.692098-6.539509q25.617877-20.260357,13.896458-29.019075c-11.721419-8.758718-17.365497-29.534168-33.514986-22.070844s-117.787922,102.814618-166.348775,68.25613-21.042995-81.190444-18.392371-94.414169s47.0786-39.377941,55.585832-46.594005s37.375437,7.541914,40.871934,17.983651q3.496497,10.441737-10.626703,39.645777-4.829955-2.192951,0-11.035423c4.829955-8.842472,43.37084-5.815249,38.828338,11.035423q-4.542502,16.850672-54.359673,27.976839l15.531335,19.843324"
          stroke="#7aa95c"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        
        <path
          d="M133.651226,65.211172c25.842803-.310294,59.384085,17.425552,57.629428,51.089918"
          stroke="#7aa95c"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <path
          d="M27.156314,193.442962c11.009962,11.297494,10.684329.826415,25.574442,14.55776c3.386177,13.694048-3.943265,34.131024-25.574442,32.066418c11.263871,1.636221,30.973329,2.421982,29.902425,12.787222c15.917088,18.023523-13.974064,33.676028-32.656596,33.836956q0,.786906,2.754171-93.248356"
          transform="matrix(.891617 0 0 0.879286-5.132993 25.057427)"
          stroke="#B1C5FF"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />

        <path d="M108.207626,286.691318q1.573812-93.248356,2.360718-93.248356q11.717232-12.197041,25.574444,9.836325t-25.574444,26.361349" 
        transform="matrix(.891617 0 0 0.879286-13.321674 31.33704)" 
        fill="none" 
        stroke="#B1C5FF" 
        stroke-width="2"
        pathLength={1}
        filter="url(#blurMe)"
        />

        <path d="M163.684497,198.164398q-3.541077,88.52692,7.475606,88.52692q27.935161,14.55776,29.508973-39.345298t0-48.78817" 
        transform="matrix(.891617 0 0 0.879286-22.747114 26.124941)" 
        fill="none" 
        stroke="#B1C5FF" 
        stroke-width="2"
        pathLength={1}
        filter="url(#blurMe)"
        />

        <path d="M213.653025,279.609165q1.180359-81.051313,12.590495-76.329878q18.492288-7.082155,16.131571,18.49229c-2.360717,25.574445,6.295248,30.843348,8.655966,16.20858q2.360718-14.634769,9.442872-34.700872q9.442871-12.590495,13.377401,0t-1.573812,83.41203"
        transform="matrix(.891617 0 0 0.879286-16.787033 27.901176)" 
        fill="none" 
        stroke="#B1C5FF" 
        stroke-width="2"
        pathLength={1}
        filter="url(#blurMe)"
        />
        
        <path d="M108.207626,286.691318q1.573812-93.248356,2.360718-93.248356q11.717232-12.197041,25.574444,9.836325t-25.574444,26.361349"
        transform="matrix(.891617 0 0 0.879286 152.715493 31.33704)" 
        fill="none" 
        stroke="#B1C5FF" 
        stroke-width="2"
        pathLength={1}
        filter="url(#blurMe)"
        />


        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

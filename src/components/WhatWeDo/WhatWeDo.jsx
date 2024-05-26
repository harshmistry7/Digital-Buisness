"use client";
import React from "react";
import "./WhatWeDo.css";
import { features } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVariants,
  tagVariants,
  titleVariants,
} from "@/src/utils/animations";

const WhatWeDo = () => {
  return (
    <div>
      <div className="wwd-wrapper">
        <div className="container">
          <div className="wwd-container">
            {/* head of section */}
            <div className="wwd-head">
              <motion.span
                initial="offscreen"
                whileInView="onscreen"
                variants={tagVariants}
                className="tag"
              >
                What we do
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView="onscreen"
                variants={titleVariants}
                className="title"
              >
                Empowering founders with non Dilutive capital and Execution
                Expertise{" "}
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView="onscreen"
                variants={desVariants}
                className="des"
              >
                Here is how we can evaluate
              </motion.span>
            </div>
            {/* two blocks */}
            <div className="wwd-blocks">
              {/* first block */}
              <div className="wwd-block">
                <motion.span
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={titleVariants}
                  className="sec-title"
                >
                  Blue Advances
                </motion.span>
                <motion.span
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={desVariants}
                  className="text "
                >
                  Fund recurring growth expenses e.g. customer acquisition,
                  inventory
                </motion.span>

                <div className="block-features">
                  {features.slice(0, 3).map((feature, i) => (
                    <motion.div
                      initial="offscreen"
                      whileInView="onscreen"
                      variants={containerVariants((i + 1) * 0.1)}
                      className="block-feature"
                      key={i}
                    >
                      <Image
                        src={feature.icon}
                        alt="feature"
                        width={60}
                        height={60}
                      />
                      <span>{feature.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Second block */}
              <div className="wwd-block">
                <motion.span
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={titleVariants}
                  className="sec-title"
                >
                  Blue Seed
                </motion.span>
                <motion.span
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={desVariants}
                  className="text "
                >
                  Fund one-offs to scale e.g. product, hiring
                </motion.span>

                <div className="block-features">
                  {features.slice(3, 6).map((feature, i) => (
                    <motion.div
                      initial="offscreen"
                      whileInView="onscreen"
                      variants={containerVariants((i + 1) * 0.1)}
                      className="block-feature"
                      key={i}
                    >
                      <Image
                        src={feature.icon}
                        alt="feature"
                        width={60}
                        height={60}
                      />
                      <span>{feature.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Support Block */}
            <motion.div
            initial="offscreen"
            whileInView="onscreen"
            variants={containerVariants(0.3) }
             className="wwd-support">
              {/* Left Side */}
              <div>
                <span className="sec-title">Blue Growth Support</span>
                <span className="des">
                  Data Insights and full stack expertise to supercharge growth
                </span>
              </div>

              {/* Right Side */}
              <div>
                <span className="text">
                  Actionable data insights by connecting revenue, marketing and
                  social media platforms
                </span>
                <span className="text">
                  On demand execution expertise at cost or revenue share across
                  proposition design, engineering, marketing analytics,
                  partnerships, brand, intellectual property, market expansion,
                  talent management
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

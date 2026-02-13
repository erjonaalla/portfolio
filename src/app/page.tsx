"use client"

import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import "./globals.css";
import About from "../../components/About";
import WorkExperience from "../../components/WorkExperience";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects"
import ContactMe from "../../components/ContactMe";
import Link from "next/link";
import ErjonaImg from "../../image/Erjona.jpeg"




const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Erjona's Portfolio </title>

      </Head>

      <Header />

      <section id="hero" className="">
        <Hero />
      </section>


       <section id="about" className="">
        <About />
      </section>

      <section id="experience" className="">
        <WorkExperience />
      </section>

      <section id="skills" className="">
        <Skills />
      </section>

      <section id="projects" className="">
        <Projects />
      </section>

      <section id="contact" className="">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src={ErjonaImg.src} alt="Erjona" />
          </div>
        </footer>
      </Link>

    </div>
  )
}
export default Home;

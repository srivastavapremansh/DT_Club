import React from "react"
import { ExampleNavbarThree } from "../components/navbar"
import { HeroOne } from "../components/hero"
import { SignInOne } from "../components/signin"
import { FeatureTwo } from "../components/design_cores"
import { AboutPageOne } from "../components/about"
import { TestimonialOne } from "../components/testimonial"
import { BlogPageTwo } from "../components/main_event"
import { FaqFour } from "../components/faqs"
import { FooterThree } from "../components/footer"
function Home() {

  return (
    <div className="bg-[#F9FAFB]">
      <ExampleNavbarThree/>
      <HeroOne/>
      <FeatureTwo/>
      <SignInOne/>
      <AboutPageOne/>
      <TestimonialOne/>
      <BlogPageTwo/>
      <FaqFour/>
      <FooterThree/>
    </div>
  )
}

export default Home

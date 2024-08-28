import React from 'react'
import { Menu, X } from 'lucide-react'
import a2 from '../assets/a2.png'
import clubs from "../assets/blogimg/clubs.jpeg"
import ebuli from "../assets/blogimg/ebuli.jpeg"
import krishi from "../assets/blogimg/krishi.jpeg"
import machao from "../assets/blogimg/machao.jpeg"
import mentor from "../assets/blogimg/mentor.jpeg"
import scholar from "../assets/blogimg/scholar.jpeg"
import sessions from "../assets/blogimg/sessions.jpeg"
import swadesh from "../assets/blogimg/swadesh.jpeg"
import teach from "../assets/blogimg/teach.jpeg"

const posts = [
  {
    category: 'SWADESH INTERN',
    title: 'It is an open source platform, provides internship and mentoring',
    description: 'Founders - Aditya Kumar Mishra, Sushant Verma and Madhvendra Singh',
    author: 'Aditya Kumar Mishra',
    date: '3 April 2023',
    avatar: 'https://www.uifaces.co/wp-content/uploads/2022/01/uifaces-logo.svg',
    poster:swadesh,
  },
  {
    category: 'KRISHI KALYAN',
    title: 'It is a service based company which provides service to bank to provide loans to farmers',
    description:
      ' Founder - Madhvendra Singh',
    author: 'Madhvendra Singh',
    date: '1 April 2023',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    poster:
      krishi,
  },
  {
    category: 'MACHAO',
    title: 'Machao is a Merchandise company',
    description:
      ' Founders - Raghuvendhar, Sarthak Jain and Sachindanand Singh',
    author: 'Sarthak Jain',
    date: '28 March 2023',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    poster:machao,
  },
  {
    category: ' SCHOLAR RANK AI',
    title: ' ScholarRank AI is a comprehensive platform for online learning, teaching, assessment and proctoring.',
    description:
      'Discover the scientifically proven benefits of mindfulness meditation and how it can improve your health and wellbeing.',
    author: ' Founders - Ritik Kumar',
    date: '25 March 2023',
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
    poster:scholar,
  },
  {
    category: 'More about us',
    title: 'Personalized Mentoring Sessions',
    description:
      ' Receive one-on-one guidance from experienced mentors who will help you refine your ideas and unlock your full potential.',
    author: 'Madhvendra Singh',
    date: '22 March 2023',
    avatar: 'https://randomuser.me/api/portraits/men/97.jpg',
    poster:sessions,
  },
  {
    category: 'SEGUE 2.0',
    title: 'Enhanced Problem-Solving Skills',
    description: 'Develop and sharpen your problem-solving abilities through innovative challenges and collaborative exercises',
    author: 'Madhvendra Singh',
    date: '19 March 2023',
    avatar: 'https://randomuser.me/api/portraits/men/99.jpg',
    poster:teach,
  },
  {
    category: 'EBULLIENCE-24',
    title: 'Events of DESIGN THINKING CLUB',
    description:
      'Pitch your startup ideas to judges and win exciting prices',
    author: 'Madhvendra Singh',
    date: '16 March 2023',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    poster:ebuli,
  },
  {
    category: 'MORE ABOUT US',
    title: 'Constructive Feedback on Your Ideas',
    description:
      'Get valuable insights and balanced feedback on your ideas, including their strengths and areas for improvement, to make them even better.',
    author: 'Madhvendra Singh',
    date: '13 March 2023',
    avatar: 'https://randomuser.me/api/portraits/women/47.jpg',
    poster:clubs,
  },
  {
    category: 'MORE ABOUT US',
    title: ' Hands-On Experience',
    description:
      ' Engage in real-world projects and ground level work that puts your skills to the test and helps you gain practical experience',
    author: 'Madhvendra Singh',
    date: '10 March 2023',
    avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
    poster:mentor,
  },
]

export function BlogPageOne() {


  return (
    <div>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <p className="text-3xl font-bold text-red-600 md:text-5xl md:leading-10">
            Events
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p>
        </div>
        {/*Upcoming event*/}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
        <div className="space-y-6">
          <p className="text-sm font-semibold md:text-base text-red-600"> UPCOMING EVENTS</p>
          <p className="text-3xl font-bold md:text-4xl"><span className='text-red-600'>Explore the World of Computer Science:</span>
            Join Our Interactive Workshop on Diverse Domains</p>
          <p className="text-base text-gray-600 md:text-lg">
            Discover the exciting world of computer science
            through our engaging workshop designed just for
            you! Dive into various domains such as Web
            Development, Artificial Intelligence ,Cybersecurity,
            and more. This is your chance to explore different
            fields, understand what sparks your interest, and
            find the path that best suits your passion and skills.
            Don’t miss out on this opportunity to gain valuable
            insights and set the stage for your future career in
            tech!
          </p>
          <button
            type="button"
            className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Join Now
          </button>
        </div>
        <div className="md:mt-o mt-10 w-full  object-contain">
          <img
            src={a2}
            alt="Getting Started"
            className="rounded-lg"
          />
        </div>
      </div>
      <p className="text-3xl font-bold text-red-600 md:text-5xl md:leading-10">
            Old Events
          </p>
      {/* posts */}
      <div className="grid gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post.title} className="border">
            <img src={post.poster} className="aspect-video w-full rounded-md" alt="" />
            <div className="min-h-min p-3">
              <p className="mt-4 w-full text-xs font-semibold leading-tight text-gray-700">
                #{post.category}
              </p>
              <p className="mt-4 flex-1 text-base font-semibold text-gray-900">{post.title}</p>
              <p className="mt-4 w-full text-sm leading-normal text-gray-600">
                {post.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div >
  )
}

import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import dayjs from 'dayjs'

type Status = 'idle' | 'loading' | 'loaded' | 'error'
type Post = {
  link: string
  title: string
  thumbnail: string
  pubDate: string
  description: string
}

const mediumFetch = async (name: string) => {
  const res = await fetch(
    `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${name}`
  )
  return await res.json()
}

export const News: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    setStatus('loading')
    mediumFetch('@cardano-fans')
      .then((res) => {
        setPosts(res.items)
        setStatus('loaded')
      })
      .catch(() => {
        setStatus('error')
      })
  }, [])

  return (
    <section id="news" className="py-36 mx-auto ">
      <div className="custom-shape-divider-top-1658447098">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z" className="shape-fill"></path>
        </svg>
      </div>

      <section className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">

            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 text-4xl text-gray-200 md:mr-10">The humans behind the project</h2>
            </div>

            {/* Team members */}
            <div className="max-w-sm sm:max-w-5xl mx-auto sm:flex sm:flex-wrap sm:justify-center -my-6 sm:-my-8 sm:-mx-3 md:ml-10" data-aos-id-team>

              {/* 1st member */}
              <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <img className="rounded-full mb-4" src={"https://dummyimage.com/200x200"} width="120" height="120" alt="Team member 01" />
                  <h4 className="text-xl text-gray-200 font-bold mb-1">Mark Lamprecht</h4>
                  <div className="text-blue-600 font-medium mb-2">CEO & Co-founder</div>
                  <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                  <div className="text-sm text-gray-200 font-medium">
                    <a className="text-gray-400 hover:underline" href="#0">Twitter</a> · <a className="text-gray-400 hover:underline" href="#0">GitHub</a> · <a className="text-gray-400 hover:underline" href="#0">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* 1st member */}
              <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <img className="rounded-full mb-4" src={"https://dummyimage.com/200x200"} width="120" height="120" alt="Team member 01" />
                  <h4 className="text-xl text-gray-200 font-bold mb-1">Mark Lamprecht</h4>
                  <div className="text-blue-600 font-medium mb-2">CEO & Co-founder</div>
                  <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                  <div className="text-sm text-gray-200 font-medium">
                    <a className="text-gray-400 hover:underline" href="#0">Twitter</a> · <a className="text-gray-400 hover:underline" href="#0">GitHub</a> · <a className="text-gray-400 hover:underline" href="#0">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* 1st member */}
              <div className="sm:w-1/2 md:w-1/3 py-6 sm:py-8 sm:px-3" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-team]">
                <div className="flex flex-col items-center">
                  <img className="rounded-full mb-4" src={"https://dummyimage.com/200x200"} width="120" height="120" alt="Team member 01" />
                  <h4 className="text-xl text-gray-200 font-bold mb-1">Mark Lamprecht</h4>
                  <div className="text-blue-600 font-medium mb-2">CEO & Co-founder</div>
                  <p className="text-gray-600 text-center mb-3">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum sint occaecat cupidatat.</p>
                  <div className="text-sm text-gray-200 font-medium">
                    <a className="text-gray-400 hover:underline" href="#0">Twitter</a> · <a className="text-gray-400 hover:underline" href="#0">GitHub</a> · <a className="text-gray-400 hover:underline" href="#0">LinkedIn</a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


    </section>
  )
}



export default News

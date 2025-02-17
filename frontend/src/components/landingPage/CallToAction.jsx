import React from 'react'

const CallToAction = () => {
  return (
    <section id="cta">
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">
            Track and Resolve Faster
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Everything you need to streamline issue tracking
          </p>
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset="1" stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Boost Your Team’s Productivity with EaserTracker
              </h2>
              <p className="mt-6 text-pretty text-lg/8 text-gray-300">
                Stay on top of bugs and feature requests with an intuitive issue-tracking system.
                Improve team collaboration and streamline your development process.
              </p>
              <p className="mt-4 text-pretty text-md text-gray-400">
                Whether you're a solo developer or part of a large team, EaserTracker ensures that no issue gets overlooked.
                Track progress, assign tasks, and resolve problems faster than ever.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get
                  started</a>
                <a href="#" className="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <img className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://discordbanners.vercel.app/static/img/bannerside.png" alt="App screenshot"
                width="1824" height="1080" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default CallToAction;

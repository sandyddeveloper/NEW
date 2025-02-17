import React from 'react'

const Features = () => {
  return (
    <section id="features">
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-indigo-600">
            Track and Resolve Faster
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
            Everything you need to streamline issue tracking
          </p>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-2xl">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">
                    User-Friendly Interface
                  </p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 text-center">
                    Easily log, track, and resolve bugs with an intuitive dashboard designed for efficiency.
                  </p>
                </div>
                <div
                className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                <div
                  className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img className="size-full object-cover object-top"
                    src="https://tailwindui.com/plus-assets/img/component-images/bento-03-mobile-friendly.png" alt="" />
                </div>
              </div>
              </div>
            </div>
            <div className="relative max-lg:row-start-1">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg max-lg:rounded-t-2xl">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">Performance Optimization</p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 text-center">
                    Lightning-fast issue tracking ensures no bottlenecks in your workflow.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                  <img className="w-full max-lg:max-w-xs" 
                    src="https://tailwindui.com/plus-assets/img/component-images/bento-03-performance.png" 
                    alt="Performance Optimization" 
                  />
                </div>
              </div>
            </div>
            <div className="relative lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">Robust Security</p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 text-center">
                    Ensure data integrity with secure access controls and encrypted logs.
                  </p>
                </div>
                <div className="flex flex-1 items-center max-lg:py-6 lg:pb-2">
                  <img className="h-[152px] object-cover" 
                    src="https://tailwindui.com/plus-assets/img/component-images/bento-03-security.png" 
                    alt="Robust Security" 
                  />
                </div>
              </div>
            </div>
            <div className="relative lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-lg max-lg:rounded-b-2xl lg:rounded-r-2xl">
                <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 text-center">Seamless Integrations</p>
                  <p className="mt-2 max-w-lg text-sm text-gray-600 text-center">
                    Connect with your favorite development tools for a smoother bug-fixing experience.
                  </p>
                </div>
                <div className="relative min-h-[30rem] w-full grow">
                  <div className="absolute bottom-0 left-10 right-0 top-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl">
                    <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                      <div className="-mb-px flex text-sm font-medium text-gray-400">
                        <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                          IssueTrackerAPI.py
                        </div>
                        <div className="border-r border-gray-600/10 px-4 py-2">BugReport.py</div>
                      </div>
                    </div>
                    <div className="px-6 pb-14 pt-6">
                      <pre className="whitespace-pre-wrap text-white">{/* Code Preview Here */}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
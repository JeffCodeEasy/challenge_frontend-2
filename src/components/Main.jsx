import React from 'react'
import avatar from "../assets/avatar-ali.png"
import { Persons } from './Persons'

export const Main = () => {
  return (
    <main>
        <section className='wrapper text-center py-24  grid gap-12 md:grid-cols-2'>
            <article>
                <h2 className='text-3xl font-bold text-Very-Dark-Blue mb-6 md:text-4xl'>What's different about Manage?</h2>
                <p className='text-Dark-Grayish-Blue mb-6'>
                Manage provides all the functionality your team needs, without
                the complexity. Our software is tailor-made for modern digital
                product teams.
                </p>
            </article>

            <div className='grid gap-12'>
                <article className='space-y-4 md:space-y-6'>
                    <p className='bg-Very-Pale-Red rounded-l-full font-bold flex items-center md:bg-transparent'> 
                        <span className='bg-Bright-Red text-white px-6 rounded-full py-2'>
                            01
                        </span>
                        <span className='flex-1 p-2'>
                            Track company-wide progress
                        </span>
                    </p>
                    <p className='text-Dark-Grayish-Blue text-left'>
                    See how your day-to-day tasks fit into the wider vision. Go from
                    tracking progress at the milestone level all the way done to the
                    smallest of details. Never lose sight of the bigger picture again.
                    </p>
                </article>
                <article className='space-y-4 md:space-y-6'>
                    <p className='bg-Very-Pale-Red rounded-l-full font-bold flex items-center md:bg-transparent'> 
                        <span className='bg-Bright-Red text-white px-6 rounded-full py-2'>
                            02
                        </span>
                        <span className='flex-1 p-2'>
                        Advanced built-in reports
                        </span>
                    </p>
                    <p className='text-Dark-Grayish-Blue text-left'>
                    Set internal delivery estimates and track progress toward company 
                    goals. Our customisable dashboard helps you build out the reports 
                    you need to keep key stakeholders informed.
                    </p>
                </article>
                <article className='space-y-4 md:space-y-6'>
                    <p className='bg-Very-Pale-Red rounded-l-full font-bold flex items-center md:bg-transparent'> 
                        <span className='bg-Bright-Red text-white px-6 rounded-full py-2'>
                            03
                        </span>
                        <span className='flex-1 p-2'>
                            Everything you need in one place
                        </span>
                    </p>
                    <p className='text-Dark-Grayish-Blue text-left'>
                    Stop jumping from one service to another to communicate, store files, 
                    track tasks and share documents. Manage offers an all-in-one team 
                    productivity solution.
                    </p>
                </article>
            </div>
        </section>

        {/* Persons */}
        <section class="wrapper text-center py-24 max-w-lg mx-auto md:max-w-xl">
            <h2 class="text-3xl font-bold text-Very-Dark-Blue md:text-4xl">
                What they’ve said
            </h2>
            <Persons/>

            <a href="#" className="button mx-auto shadow-xl shadow-Bright-Red/30">Get Started</a>
        </section>

        {/* Button */}
        <section className="bg-Bright-Red font-bold">
            <div className="wrapper py-24 text-center grid gap-6 md:grid-cols-[40%_40%] md:justify-between md:items-center md:text-left">

                <h2 className="text-4xl text-Very-Pale-Red">
                    Simplify how your team works today.
                </h2>

                <a href="#" className="button text-Bright-Red bg-Vary-Light-Gray mx-auto md:mx-0 md:justify-self-end">Get Started</a>

            </div>
        </section>
       {/* Button */}

    </main>
  )
}

import React from 'react'

const Overview = () => {
  return (
    <div className='px-20'>
        <div className='flex flex-col'>
            <div className='text-2xl font-bold'><h1>About this Course</h1></div>
            <div className='mt-4 font-base text-lg '><p>DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and <br/> Deeper Understanding.</p></div>
        </div>
        <div className='w-11/12 h-0.5 bg-gray-400 mt-8 '></div>
        <div className='flex flex-row gap-80 mt-6 font-semibold'>
            <div><p>By the numbers</p></div>
            <div>
                <p>Skill level: All Levels</p>
                <p>Students: 42159</p>
                <p>Languages: English</p>
                <p>Captions: Yes</p>
            </div>
            <div>
                <p>Lectures: 128</p>
                <p>Video: 10 total hours</p>
            </div>
            
            
        </div>
        <div className='w-11/12 h-0.5 bg-gray-400 mt-8 '></div>
        <div className='flex flex-row gap-80 mt-6 font-semibold'>
                <div><h1>Certificates</h1></div>
                <div>
                    <div>Get certificate by completing entire course</div>
                    <div className='px-20 border-2 py-2 text-center mt-2 '>
                        <button>
                            Certificate
                        </button>
                    </div>
                </div>
            </div>
            
            <div className='w-11/12 h-0.5 bg-gray-400 mt-8 '></div>

            <div className='flex flex-row gap-80 mt-6 font-semibold mb-4'>
                <div><h1>Features</h1></div>
                <div>
                    <div>
                        Available on iOS and Android</div>
                    <div >
                    Coding exercises
                    </div>
                </div>
            </div>

            <div className='w-11/12 h-0.5 bg-gray-400 mt-8 '></div>

            <div className='flex flex-row gap-80 mt-6 font-semibold mb-4'>
                <div><h1>Description</h1></div>
                <div className=' flex flex-col gap-4'>
                    <div className='font-bold text-xl'>
                    Welcome to Data Structures & Algorithms in Java</div>
                    <div >
                    This course makes learning to code fun and makes hard concepts easy to <br/> understand.
                    </div>
                    <div>How did I do this?  By using animations!</div>
                    <div>Animating the Data Structures & Algorithms makes everything more visually <br/> engaging and allows students to learn more material - in less time - with higher <br/> retention (a pretty good combination).</div>
                    <div>I will use these visuals to guide you, step-by-step, through the entire course.</div>
                    <div>The course also includes dozens-and-dozens of Coding Exercises. So you can <br/> immediately put everything into practice as soon as you learn it (a very important <br/> step).</div>
                    <div>All of this will help you to feel more confident and prepared when you walk into a <br/> coding interview.</div>
                    <div>I have made several Free Sample Videos available for the course so you can see the <br/> difference the animations make.</div>
                    <div>Also, I am very active on the Q&A, so I will be with you every_step_of _the_way.</div>
                </div>
            </div>
    </div>
  )
}

export default Overview
function AboutUs() {

    return (
        <>
            <div className='w-[550px] mx-auto py-12 px-4 mt-12 rounded-lg border border-r-[4px] border-b-[4px] border-buttonBackground '>
                <div className='w-full items-center px-8'>
                    <p
                        className='font-maven block text-white uppercase font-medium text-2xl text-center md:mb-0 pr-4'>
                        About Us
                    </p>
                </div>
                <div className='mt-3 text-xl flex justify-between'>
                    <p className='font-monserrat text-colorDescription'>
                        <span className='italic font-monserrat'>Dark chocolate for people, who work with their brain, not with their hands.</span>
                        <br/>
                        <br/>
                        At Outside the Box, our mission is to empower smart and creative minds to reach heights they
                        never thought possible. We believe that innovation and breakthroughs occur when nerds and
                        brainiacs gather together and start thinking outside the box - and we, in turn, are delighted to
                        fuel their cognitive abilities with our 80% extra dark chocolate. We are more than just a treat:
                        we are a private community of explorers, collaborators, and thinkers.
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutUs;

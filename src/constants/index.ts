const navLinks = [
    {
        label: "HOME",
        href: "/"
    },
    {
        label: "ABOUT US",
        href: "#about-section"
    },
    {
        label: "SERVICES",
        href: "#"
    },
    {
        label: "SHOP",
        href: "#"
    },
    {
        label: "CONTACT",
        href: "#contact-section"
    },
]

const aboutUsText = {
    header: "Built for the road. Trusted in Saskatoon.",
    text: `At AutoCradle, we pride ourselves on delivering top-notch automotive services with a personal touch. Our team of experienced mechanics is dedicated to ensuring your vehicle runs smoothly and safely. From routine maintenance to complex repairs, we use the latest technology and techniques to get the job done right the first time. Customer satisfaction is our priority, and we strive to build lasting relationships with each of our clients. Trust AutoCradle for all your automotive needs – where quality meets reliability.`
};

const contactInfo = {
    phone: "+1 (306) 952-1981",
    email: "autocradle4x4@gmail.com",
    address: "119 Jonathon Ave unit 602, Saskatoon, SK S7M 5Z6, Canada",
    shopHours: "Mon - Sat: 9AM - 5PM",
    socials: {
        fbLink: "https://www.facebook.com/profile.php?id=61571610351983",
    }
}

const testimonials = [
    {
        name: "Byron O.",
        text: `Job done properly. Highly recommended! 100% customer satisfaction! These guys are great! Did suspension works on my car. So happy especially with the final adjustments and settings done to my ride! AutoCradle Autoshop all the way!!
        `,
        image: "/src/assets/testimonials/t3.png",
        rating: 5,
    },
    {
        name: "Karrylle S.",
        text: `When I approached the owner, William, about doing a custom welding job for our food truck, he didn’t hesitate for a second. He took on the project with real passion, and it absolutely shows in the quality of his craftsmanship. On top of the welding, William also spotted an issue with our wheels that we hadn’t noticed. Thanks to him, our food truck is now running smoothly and ready to roll just in time for summer. If you’re looking for someone who genuinely cares about their work and their customers, Autocradle is the one to call.`,
        image: "/src/assets/testimonials/t4.png",
        rating: 5,
    },
    {
        name: "Jing C.",
        text: `The best mechanic shop in the city, great prices and friendly staff. This is the only place I go to get my vehicle serviced!
        `,
        image: "/src/assets/testimonials/t2.png",
        rating: 5,
    },
];

export { testimonials, aboutUsText, contactInfo, navLinks };

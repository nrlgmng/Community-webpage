const express = require("express");
const router = express.Router();

// In-memory storage for contact form submissions
let contactSubmissions = [];

// Data for about page (team members, placeholder)
const groupMembers = [
    { obj1: "Hannes Smit", obj2: "President" },
    { obj1: "Ashton Damons", obj2: "Vice President" },
    { obj1: "Kaelo Molebatsi", obj2: "Community Manager" },
];

// Data for events page (events, placeholder)
const events = [
    { obj1: "Annual Charity 5K", obj2: "July 10, 2025 - Miami", image: "/pexels-liza-summer-6348129.jpg" },
    { obj1: "Beach Run Social", obj2: "August 5, 2025 - Fort Lauderdale", image: "/pexels-luhras-2630604.jpg" },
    { obj1: "Marathon Training Kickoff", obj2: "September 1, 2025 - Orlando", image: "/pexels-runffwpu-2654902.jpg" },
    { obj1: "Holiday Fun Run", obj2: "December 15, 2025 - Tampa", image: "/pexels-ron-lach-10484489.jpg" },
];

// Data for home page (merged with community)
const weatherTips = [
    { 
        title: "Stay Hydrated", 
        description: "Florida's heat can be intense. Always carry water and consider electrolyte drinks for longer runs.",
        image: "/pexels-mart-production-7880256.jpg"
    },
    { 
        title: "Run Early or Late", 
        description: "Avoid midday heat by scheduling runs before 8 AM or after 6 PM.",
        image: "/pexels-enric-cruz-lopez-6039243.jpg"
    },
    { 
        title: "Wear Lightweight Gear", 
        description: "Choose breathable, moisture-wicking clothing to stay cool and comfortable.",
        image: "/pexels-mart-production-8032758.jpg"
    },
    { 
        title: "Check Rain Forecasts", 
        description: "Sudden showers are common. Plan routes with shelter options during rainy seasons.",
        image: "/pexels-pixabay-268941.jpg"
    }
];

const groupRuns = [
    { name: "Sunrise Beach Run", date: "June 1, 2025", location: "Miami Beach", distance: "5K", description: "A scenic run along the coast to start your weekend!" },
    { name: "Everglades Trail Run", date: "June 15, 2025", location: "Everglades National Park", distance: "8K", description: "Explore nature with this trail run, followed by a group brunch." },
    { name: "Twilight City Loop", date: "June 22, 2025", location: "Downtown Orlando", distance: "10K", description: "Run through the city lights with fellow runners." }
];

// GET: Home page (merged with community)
router.get("/", (req, res) => {
    res.render("pages/home", { title: "Home", weatherTips, groupRuns });
});

// GET: About page
router.get("/about", (req, res) => {
    res.render("pages/about", { title: "About", groupMembers });
});

// GET: Events page
router.get("/events", (req, res) => {
    res.render("pages/events", { title: "Events", events });
});

// GET: Contact Us page
router.get("/contact", (req, res) => {
    res.render("pages/contact", { title: "Contact Us", error: null });
});

// POST: Handle Contact form submission
router.get("/thankyou", (req, res) => {
    res.render("pages/thankyou", { title: "Thank You" });
});

router.post("/contact", (req, res) => {
    const { name, surname, email, message } = req.body;

    // Server-side validation
    if (!name || !surname || !email || !message) {
        return res.render("pages/contact", {
            title: "Contact Us",
            error: "Please fill out all fields",
        });
    }

    // Store form data in in-memory array
    contactSubmissions.push({
        name,
        surname,
        email,
        message,
        timestamp: new Date(),
    });

    // Log submissions for debugging
    console.log("Current submissions:", contactSubmissions);

    // Redirect to Thank You page
    res.redirect("/thankyou");
});

module.exports = router;
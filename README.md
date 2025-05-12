Technologies Used:
Backend: Node.js (v18+), Express.js (v4+)
Frontend: EJS (v3+), CSS
Development Tools: nodemon, Git, GitHub
Dependencies: express

Team Members and Roles:
Hannes – Team Lead, Backend Developer, Frontend Developer, Data Manager, Documentation Manager
Ashton Damons – Frontend Developer
Ugochukwu Winner Ogbonnaya – Backend Developer
Kaelo Molebatsi – Data Manager

Folder Structure:
├── app.js                # Express server setup
├── public/
│   └── styles.css       # CSS styles for all pages
├── routes/
│   └── pageRoutes.js    # Modular routes for all pages
├── views/
│   ├── pages/
│   │   ├── home.ejs
│   │   ├── about.ejs
│   │   ├── events.ejs
│   │   ├── community.ejs
│   │   ├── contact.ejs
│   │   └── thankyou.ejs
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
├── .gitignore           # Ignores node_modules and other files
└── README.md            # Project documentation

Setup Instructions:
Prerequisites:
Node.js (v18 or higher)
npm (included with Node.js)
Git (for cloning)

Installation:
Clone the Repository (if using Git):
git clone <https://github.com/nrlgmng/Community-webpage>
cd sunshine-runners-club

Install Dependencies:
npm install express

Verify Files:
Place app.js, .gitignore, and README.md in the root.
Place pageRoutes.js in routes/.
Place EJS files in views/pages/ and views/partials/.
Place styles.css in public/.

Run the Server:
npm run dev
The server runs on http://localhost:3001

Usage:
Access Pages:
Home: /
About: /about
Events: /events
Community: /community
Contact: /contact
Thank You: /thankyou (after form submission)
Contact Form:
Submit name, surname, email, and message at /contact.
Data is stored in an in-memory array (contactSubmissions).
Redirects to /thankyou on success or displays an error if fields are missing.
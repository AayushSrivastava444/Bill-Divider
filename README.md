
# BillDivider

A simple and practical MERN stack application to quickly split bills among friends or groups.

## Features

- Enter total bill amount, number of people, optional tip %, and optional names
- Calculates each person’s share with and without tip
- Saves each split into MongoDB for future reference
- Built with React, Express, Node.js, and MongoDB

## Getting Started

### Prerequisites

- Node.js installed (v12+)
- MongoDB installed and running locally or use MongoDB Atlas

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/AayushSrivastava444/Bill-Divider.git


2. Install backend dependencies

   ```bash
   cd Bill-Divider/backend
   npm install
   ```

3. Install frontend dependencies

   ```bash
   cd ../client
   npm install
   ```

4. Create a `.env` file in the `backend` folder with:

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

### Running the App

From the project root folder, run:

```bash
npm run dev
```

* Backend runs on [http://localhost:5000](http://localhost:5000)
* Frontend runs on [http://localhost:3000](http://localhost:3000)

## Usage

* Open [http://localhost:3000](http://localhost:3000) in your browser
* Enter your bill details and split your bill easily

## Folder Structure

```
Bill-Divider/
├── backend/          # Express server, MongoDB models, routes
├── client/           # React frontend app
├── package.json      # Root scripts to run both backend & frontend
└── README.md         # This file
```

## Technologies Used

* React
* Node.js
* Express
* MongoDB & Mongoose
* Axios for HTTP requests

## License

This project is licensed under the MIT License.

---

Made with ❤️ by Aayush Srivastava

```

Save this as `README.md` in your project root folder.

---

Want help committing and pushing this to GitHub next?
```



# E-Commerce Project

This project is a full-stack e-commerce application with a backend built using Node.js, Express, and MongoDB, and a frontend built using React. The application supports user authentication, product management, and file uploads.

## Table of Contents

- [E-Commerce Project](#e-commerce-project)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
    - [Admin Setup](#admin-setup)
  - [Usage](#usage)
  - [Features](#features)
  - [API Endpoints](#api-endpoints)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## Installation

### Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/kamalkolisetty/E-COMMERCE.git
   cd E-COMMERCE/backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up your MongoDB connection in `index.js`:
   ```js
   const dbURI = "your_mongodb_connection_string";
   ```

4. Start the backend server:
   ```sh
   node index.js
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the frontend server:
   ```sh
   npm start
   ```

### Admin Setup

1. Navigate to the admin directory:
   ```sh
   cd ../admin
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the admin server:
   ```sh
   npm run dev
   ```

## Usage

### Adding Products (Admin)

1. Navigate to the admin panel.
2. Fill in the product details and upload an image.
3. Click on "ADD Product" to add the product to the database.

### Viewing Products (Frontend)

1. Navigate to the shop section.
2. Browse through different categories: men, women, kids.
3. Click on a product to view its details and add to the cart.

### User Authentication

1. Sign up for a new account or log in using existing credentials.
2. On successful login, you will receive a JWT token for authenticated requests.

## Features

- **User Authentication**: Sign up and login functionality with JWT.
- **Product Management**: Admin can add, view, and delete products.
- **File Uploads**: Upload product images.
- **Category Browsing**: View products by category.
- **Shopping Cart**: Add products to the cart.

## API Endpoints

- **GET /**: Check if the server is running.
- **POST /upload**: Upload product images.
- **POST /addproduct**: Add a new product.
- **POST /removeproduct**: Remove a product by ID.
- **GET /allproducts**: Get all products.
- **POST /signup**: Register a new user.
- **POST /login**: Login a user.
- **GET /newcollections**: Get the latest products.
- **GET /popularinwomen**: Get popular products in the women's category.
- **POST /addtocart**: Add a product to the user's cart (protected route).

## Frontend

The frontend of this project is built using React, providing a seamless and dynamic user experience. The main features include:

1. **Shop Page**: Displays all products available for purchase.
2. **Category Pages**: Displays products filtered by category (Men, Women, Kids).
3. **Product Page**: Shows detailed information about a specific product, including price, category, and description.
4. **Cart Page**: Users can view and manage the products they have added to their shopping cart.
5. **Login/Signup Page**: Users can register for a new account or log in to an existing one.

### Running the Frontend

To start the frontend application:

1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```

2. Install dependencies if not done already:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

The application will be available at `http://localhost:3000`.

### Technologies Used

- **React**: For building user interfaces.
- **React Router**: For handling routing in the application.
- **CSS**: For styling the components.

![video](/ECOMMERCE.mp4)

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

# E-Commerce Website using React

This is a small e-commerce website built using React. It includes features such as a product list, product details, shopping cart, data fetching, state management, and interactivity. Users can browse products, add them to the shopping cart, adjust quantities, and view the total price of the cart.

## Features

- Product List: Display a list of products with their names, images, and prices.
- Product Details: Show more information about a selected product when clicked.
- Shopping Cart: Add products to the cart, adjust quantities, and remove items.
- Data Fetching: Fetch product data from a mock API using lifecycle methods or the useEffect hook.
- State Management: Use the Context API or props and hooks to manage the shopping cart state across components.

## Getting Started

To get started with the project, follow the instructions below:

1. Clone the repository: `git clone https://github.com/MVKarthikReddy/E-Commerce-Site-Using-React.git`
2. Navigate to the project directory: `cd e-commerce-site`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit: `http://localhost:5173`

  I used a staic json file `db.json`. You have to install the json server using `pip install json-server` and run the command in cmd `json-server --watch db.json` to accept the request's.

  
  You can create a React project with Vite using `npm create vite@latest`. After that you have to select `React`.


## Development and Deployment

During development, you can use `npm run dev` to run the app in development mode. It will provide the url down in the terminal and reload the page whenever you make changes to the code.

To build the project for deployment, use the `npm run build` command. This will create an optimized production-ready build in the `build` directory.

## Dependencies

The project relies on the following dependencies:

- Vite : A building tool which makes react fast
- React: JavaScript library for building user interfaces.
- React Router: Library for managing routing in React applications.
- React Context API or props: Built-in state management solution in React.
- Axios: Library for making HTTP requests to the mock API or you can simply use fetch.

These dependencies are listed in the `package.json` file and will be installed automatically when running `npm install`.

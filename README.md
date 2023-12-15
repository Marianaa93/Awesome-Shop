# Awesome Store

Welcome to Awesome Store, your go-to online bookstore! This React application provides users with a delightful shopping experience for books, complete with features like search, filtering, and a shopping cart.


https://github.com/Marianaa93/awesomeShopCopy/assets/91208001/9b7c8cf2-10e0-4c1a-9b4d-ffe2441f9e1d



Link to the website: https://awesome-shop-copy.vercel.app/

## Getting Started

To get started with Awesome Store, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/awesome-store.git
    ```

2. Navigate to the project directory:

    ```bash
    cd awesome-store
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```



## Features

### 1. Search by Name

Easily find your favorite books by searching for their names.

### 2. Category Filtering

Filter books by category to discover new and exciting reads in your preferred genre.

### 3. Price Range Filtering

Stay within your budget by filtering books based on price range.

### 4. Shopping Cart

Add books to your shopping cart and keep track of your purchases.

### 5. Pagination

Navigate through the extensive book collection using the convenient pagination feature.

## Project Structure

The project directory is organized as follows:

- `src/`: Contains the application source code.
  - `components/`: Reusable components.
  - `pages/`: Application pages.
  - `services/`: Configuration and logic for communicating with the API.
  - ...

## Technologies Used

- **React**: Building the user interface.
- **Chakra UI**: Styling and UI components.
- ...

## Main Components

### 1. `Pagination`

The `Pagination` component allows easy navigation between pages of book results.

```jsx
// components/pagination/pagination.tsx
// ...

export const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  // ... component implementation ...
};
```

### 2. `Home`

The `Home` component serves as the main page, displaying books, enabling filtering, and showcasing pagination.

```jsx
// pages/home.tsx
// ...

export function Home() {
  // ... Home page implementation ...
}
```

### 3. `Shopping Cart`

The `Shopping Cart` component manages the user's selected books for purchase.

```jsx
// components/shopping-cart/shopping-cart.tsx
// ...

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ cart, clearCart }) => {
  // ... shopping cart implementation ...
};
```

## How to Contribute

If you'd like to contribute to Awesome Store, follow these steps:

1. Fork the repository.
2. Create a branch for your contribution: `git checkout -b my-contribution`
3. Make the desired changes.
4. Commit your changes: `git commit -m 'My contribution'`
5. Push the branch: `git push origin my-contribution`
6. Open a pull request.


## Author

Mariana Lima e Maia

[Link to your GitHub profile](https://github.com/marianaa93)

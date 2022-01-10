import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Precious',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },
    {
      name: 'Jerry',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      
      name: 'Nike Slim  Shirts',
      image: '/images/p1.jpg',
      category: 'shirts',
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality products',
    },
    {
      
      name: 'Adidas fit shirt',
      image: '/images/p2.jpg',
      category: 'shirts',
      price: 100,
      countInStock: 1,
      brand: 'Nike',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality products',
    },
    {
      
      name: 'Lacoste Free Shirts',
      image: '/images/p3.jpg',
      category: 'shirts',
      price: 220,
      countInStock: 8,
      brand: 'Nike',
      rating: 4.8,
      numReviews: 17,
      description: 'high quality products',
    },
    {
      
      name: 'Nike Slim  pants',
      image: '/images/p4.jpg',
      category: 'pants',
      price: 78,
      countInStock: 0,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality products',
    },
    {
      
      name: 'puma slim pants',
      category: 'pants',
      image: '/images/p5.jpg',
      price: 65,
      countInStock: 5,
      brand: 'puma',
      rating: 4.5,
      numReviews: 7,
      description: 'high quality products',
    },
    {
      
      name: 'Adidas fit pants',
      category: 'pants',
      image: '/images/p6.jpg',
      price: 50,
      countInStock: 12,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 7,
      description: 'high quality products',
    },
  ],
}
export default data

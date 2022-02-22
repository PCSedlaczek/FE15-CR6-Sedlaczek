export interface Dishes {
  name: string,
  desc: string,
  price: number,
  available: boolean,
  image: string
  }

export const dishes = [
  {
    name: "Bruschetta",
    desc: "Ricotta cheese and cherry tomatoes on bread",
    price: 7.00,
    available: true,
    image: "antipasti/calum-lewis-rPkgYDh2bmo-unsplash.jpg"
  },
  {
    name: "Caprese",
    desc: "Mozzarella with tomatoes and basil leaves",
    price: 6.50,
    available: true,
    image: "antipasti/cristiano-pinto-x8Sc8rsfx08-unsplash.jpg"
  },
  {
    name: "Insalata Mista",
    desc: "Mixed green salad with vegetables",
    price: 6.00,
    available: true,
    image: "insalate/tania-melnyczuk-xeTv9N2FjXA-unsplash.jpg"
  },
  {
    name: "Insalata al Tonno",
    desc: "Pasta salad with tuna and vegetables",
    price: 7.00,
    available: true,
    image: "insalate/eiliv-sonas-aceron-mW0LIBBHNdE-unsplash.jpg"
  },
  {
    name: "Lasagne al forno",
    desc: "Lasagne with cheese crust",
    price: 7.50,
    available: true,
    image: "primi/marie-dehayes-7FOqKhLFWxE-unsplash.jpg"
  },
  {
    name: "Spagetti Bolognese",
    desc: "Spagetti with bolognese sauce",
    price: 7.50,
    available: true,
    image: "primi/salahgraphic-4625962-pixabay.jpg"
  },
  {
    name: "Pizza Margerita",
    desc: "Tomato sauce, cheese, cherry tomatoes, basil",
    price: 10.70,
    available: true,
    image: "pizze/zuzi99-3010062-pixabay.jpg"
  },
  {
    name: "Pizza Verdura",
    desc: "Tomato sauce, cheese, vegetables",
    price: 14.50,
    available: true,
    image: "pizze/designdrawartes-5179939-pixabay.jpg"
  },
  {
    name: "Artisan Pizza Provoletta",
    desc: "Black olives, parmesan cheese with sprouts",
    price: 13.50,
    available: false,
    image: "pizze/hoja-studio-Thw3nleO3cM-unsplash.jpg"
  },
  {
    name: "Burrata con frutti",
    desc: "Burrata cheese with exotic fruit",
    price: 7.50,
    available: true,
    image: "dolce/max-griss-I90KYtZDi54-unsplash.jpg"
  },
  {
    name: "Tiramisu",
    desc: "The original italian dessert",
    price: 10.20,
    available: true,
    image: "dolce/alevision-co-au475mEaJiw-unsplash.jpg"
  },
  {
    name: "Affogato",
    desc: "Vanilla ice cream with espresso",
    price: 7.50,
    available: true,
    image: "dolce/ieva-kisunaite-kRS7qyKfVhY-unsplash.jpg"
  }
]
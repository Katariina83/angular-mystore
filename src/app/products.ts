export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    descriptionLarge: string;
    storage: number;
    screen: number;
    weight: number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Apple iPhone 11',
      price: 399,
      description: 'Apple iPhone 11 - right amount of everything.',
      descriptionLarge: 'The top-quality dual camera system guarantees the successful setting of the pictures, and the all-day battery ensures that the phone is with you for a long day. Apple iPhone 11 is always ready to use in a moment.',
      storage: 64,
      screen: 6.1,
      weight: 194
    },
    {
      id: 2,
      name: 'Samsung Galaxy A14 ',
      price: 169,
      description: 'Create high-resolution photos and graphics.',
      descriptionLarge: 'Samsung Galaxy A14 has enough space for storing memories, as you can expand the storage space with a microSD card up to 1 TB. Sharp 90Hz screen, without stressing about battery life. Quick charging.',
      storage: 64,
      screen: 6.6,
      weight: 205
    },
    {
      id: 3,
      name: 'OnePlus 10 Pro 5G ',
      price: 599,
      description: 'OnePlus makes everything look crystal clear.',
      descriptionLarge: 'Triple camera system developed with Hasselblad, a precise 120 Hz AMOLED screen with the latest technology, a super-fast 5G connection and the power to win game after game. Full charge in 15 minutes.',
      storage: 256,
      screen: 6.7,
      weight: 200.5
    },
    {
      id: 4,
      name: 'Apple iPhone X 256',
      price: 799,
      description: 'Apple iPhone X with revolutionary features.',
      descriptionLarge: 'The revolutionary design consists of an edge-to-edge screen and a glass body, which is complemented by a stylish steel border. Take a journey into the world of iPhone X cutting-edge technology and great features.',
      storage: 256,
      screen: 6.4,
      weight: 174
    },
    {
      id: 5,
      name: 'Samsung Galaxy S10',
      price: 499,
      description: 'Samsung Galaxy S10 is simple and usable.',
      descriptionLarge: 'The new generation Samsung Galaxy S10 Plus smartphone has a 6.4-inch Infinity-O screen, 4K quality video recording, triple rear camera, wireless charging and much more.',
      storage: 60,
      screen: 6.4,
      weight: 175
    },
    {
      id: 6,
      name: 'Apple iPhone 7',
      price: 699,
      description: 'iPhone 7 offers good performance.',
      descriptionLarge: 'iPhone 7 offers an even better user experience. The phone has new advanced cameras, incredible performance, long battery life and a splash-resistant design.',
      storage: 150,
      screen: 4.7,
      weight: 138
    }
    
  ];
  
import heroCake from './assets/images/hero_cake_1779281114398.png';
import birthdayCake from './assets/images/birthday_cake_1779281131877.png';
import weddingCake from './assets/images/wedding_cake_1779281159946.png';
import chocCake from './assets/images/choc_drizzle_cake_1779281176141.png';

export const products = [
  {
    id: 1,
    name: 'Bento & Cupcake Combo Box',
    price: '₦25,000',
    numericPrice: 25000,
    image: chocCake,
    category: 'Budget Combos',
    description: 'Perfect budget-friendly box featuring a delicious bento cake and premium cupcakes.',
  },
  {
    id: 2,
    name: '6-Inch Pink Custom Cake',
    price: '₦36,000',
    numericPrice: 36000,
    image: heroCake,
    category: 'Custom Celebration',
    description: 'Beautiful 2-layer signature pink custom cake for elegant celebrations.',
  },
  {
    id: 3,
    name: 'Children\'s Character Cake',
    price: '₦48,000',
    numericPrice: 48000,
    image: birthdayCake,
    category: 'Kids & Cartoon Themes',
    description: 'Highly detailed 6-inch, 3-layer themed cake. Perfect for birthdays and parties!',
  },
  {
    id: 4,
    name: 'Multi-Tier Wedding Elegance',
    price: 'Custom Quotes',
    numericPrice: 0,
    image: weddingCake,
    category: 'Weddings',
    description: 'Luxurious bespoke tier cakes with elegant sugar flowers and pristine detailing.',
  }
];

export const heroImage = heroCake;

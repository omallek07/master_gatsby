import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  // computer name
  name: 'topping',
  // visible title
  title: 'Toppings',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'Name of the topping',
    },
    {
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      description: 'Is the topping vegetarian?',
      options: {
        layout: 'checkbox',
      },
    },
    // {
    //   name: 'price',
    //   title: 'Price',
    //   type: 'number',
    //   description: 'Price of the pizza in cents',
    //   validation: (Rule) => Rule.min(1000).max(50000),
    //   // TODO: Add custom input component
    // },
  ],
  preview: {
    select: {
      name: 'name',
      vegetarian: 'vegetarian',
    },
    prepare: ({ name, vegetarian }) => ({
      title: `${name} ${vegetarian ? ' - Veggie' : ''}`,
    }),
  },
};

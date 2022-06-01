import React from 'react';
import { ComponentStory } from '@storybook/react';

import ProductItem from './ProductItem';

export default {
    title: 'Product Item',
    component: ProductItem
}

const Template: ComponentStory<typeof ProductItem> = (args) => <ProductItem {...args} />

export const Primary = Template.bind({});
Primary.args = {
    name: 'Floral Cow Dangles',
    price: 32,
    imgSrc: './images/sample.webp'
}
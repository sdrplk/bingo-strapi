import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderOrderList extends Schema.Component {
  collectionName: 'components_order_order_lists';
  info: {
    displayName: 'OrderList';
    icon: 'briefcase';
  };
  attributes: {
    product: Attribute.Relation<
      'order.order-list',
      'oneToOne',
      'api::product.product'
    >;
    count: Attribute.Integer;
  };
}

export interface ProductCart extends Schema.Component {
  collectionName: 'components_product_carts';
  info: {
    displayName: 'cart';
    icon: 'shoppingCart';
  };
  attributes: {
    product: Attribute.Relation<
      'product.cart',
      'oneToOne',
      'api::product.product'
    >;
    count: Attribute.Integer;
  };
}

export interface ProductProductMeta extends Schema.Component {
  collectionName: 'components_product_product_metas';
  info: {
    displayName: 'Meta';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order.order-list': OrderOrderList;
      'product.cart': ProductCart;
      'product.product-meta': ProductProductMeta;
    }
  }
}

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

export interface SubCategorySecondaryCategory extends Schema.Component {
  collectionName: 'components_sub_category_secondary_categories';
  info: {
    displayName: 'Secondary Category';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    code: Attribute.String;
    url: Attribute.Text;
  };
}

export interface SubCategorySubCategory extends Schema.Component {
  collectionName: 'components_sub_category_sub_categories';
  info: {
    displayName: 'Sub Category';
    icon: 'link';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    code: Attribute.String;
    sequence: Attribute.Integer;
    secondary_category: Attribute.Component<
      'sub-category.secondary-category',
      true
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order.order-list': OrderOrderList;
      'product.cart': ProductCart;
      'product.product-meta': ProductProductMeta;
      'sub-category.secondary-category': SubCategorySecondaryCategory;
      'sub-category.sub-category': SubCategorySubCategory;
    }
  }
}

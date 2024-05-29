import { ISubMenu, IMenu } from '@src/interface/MenuInterface';

export const MainMenuOptions: IMenu[] = [
  { key: 'ShoppingMallManagement', name: '쇼핑몰관리', href: '#', show: false },
  { key: 'ProductManagement', name: '상품관리', href: '#', show: false },
  { key: 'StockManagement', name: '재고관리', href: '#', show: false },
  { key: 'ProductLinkManagement', name: '연동관리', href: '#', show: false },
  { key: 'OrderManagement', name: '주문관리', href: '#', show: false },
  { key: 'ClaimManagement', name: '문의관리', href: '#', show: false },
];

export const UserMenuOptions: IMenu[] = [
  { key: 'MyPage', name: '마이페이지', href: '#' },
  { key: 'Payment', name: '결제정보', href: '#' },
];

export const SubMenuOptions: ISubMenu = {
  ShoppingMallManagement: [
    { key: 'shoppingMall_info', name: '쇼핑몰등록리스트', href: '/shopping-mall/info', show: false },
    { key: 'shoppingMall_register_setting', name: '쇼핑몰별설정리스트', href: '/shopping-mall/setting', show: false },
  ],
  StockManagement: [
    { key: 'stock_list', name: '재고리스트', href: '/stock/list', show: false },
    { key: 'stock_register', name: '재고등록', href: '/stock/register', show: false },
  ],
  ProductManagement: [
    { key: 'product_register', name: '상품등록', href: '/product/register', show: false },
    { key: 'product_list', name: '상품리스트', href: '/product/list', show: false },
  ],
  ProductLinkManagement: [
    { key: 'shoppingMall_product_register', name: '쇼핑몰별상품등록', href: '/link/register', show: false },
    { key: 'shoppingMall_product_list', name: '쇼핑몰별등록상품리스트', href: '/link/list', show: false },
  ],
  OrderManagement: [
    { key: 'shoppingMall_order_collect', name: '주문수집', href: '/order/collect', show: false },
    { key: 'shoppingMall_order_list', name: '주문리스트', href: '/order/list', show: false },
  ],
  ClaimManagement: [
    { key: 'qna_manager', name: '문의관리', href: '/qna/inquire', show: false },
    { key: 'claim_manager', name: '클레임관리', href: 'qna/claim', show: false },
  ],
};

import {IHeaderMainSubMenu, IHeaderMenu} from "@src/interface/MainMenuInterface";

export const HeaderMenuOptions: IHeaderMenu[] = [
  { key: 'ShoppingMallManagement', name: '쇼핑몰관리', href: '#', show: false },
  { key: 'ProductManagement', name: '상품관리', href: '#', show: false },
  { key: 'StockManagement', name: '재고관리', href: '#', show: false },
  { key: 'ProductLinkManagement', name: '연동관리', href: '#', show: false },
  { key: 'OrderManagement', name: '주문관리', href: '#', show: false },
  { key: 'ClaimManagement', name: '문의관리', href: '#', show: false },
];

export const myMenuOptions = [
  { key: 'MyPage', name: '마이페이지', href: '#', show: false },
  { key: 'Logout', name: '로그아웃', href: '#', show: false },
];


export const HeaderMainSubMenuOptions: IHeaderMainSubMenu = {
  ShoppingMallManagement: [
    { key: 'shoppingMall_info_insert', name: '쇼핑몰정보등록', href: '', show: false },
    { key: 'shoppingMall_insert_setting', name: '쇼핑몰별등록설정', href: '', show: false },
  ],
  StockManagement: [
    { key: 'stock_list', name: '재고리스트', href: '', show: false },
    { key: 'stock_insert', name: '재고등록', href: '', show: false },
  ],
  ProductManagement: [
    { key: 'product_insert', name: '상품등록', href: '#', show: false },
    { key: 'product_list', name: '상품리스트', href: '#', show: false },
  ],
  ProductLinkManagement: [
    { key: 'shoppingMall_product_insert', name: '쇼핑몰별상품등록', href: '', show: false },
    { key: 'shoppingMall_product_list', name: '쇼핑몰별등록상품리스트', href: '', show: false },
  ],
  OrderManagement: [
    { key: 'shoppingMall_order_collect', name: '주문수집', href: '', show: false },
    { key: 'shoppingMall_order_list', name: '주문리스트', href: '', show: false },
  ],
  ClaimManagement: [
    { key: 'qna_manager', name: '문의관리', href: '', show: false },
    { key: 'claim_manager', name: '클레임관리', href: '', show: false },
  ],
};
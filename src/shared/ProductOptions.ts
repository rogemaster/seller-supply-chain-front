export const ProductStatusOptions = [
  { key: '001', name: '판매중' },
  { key: '002', name: '대기중' },
  { key: '003', name: '품절' },
  { key: '004', name: '판매중지' },
];

export const ProductDeliveryOptions = [
  { key: '001', name: '무료배송' },
  { key: '002', name: '선결제' },
  { key: '003', name: '착불' },
  { key: '004', name: '조건부배송' },
];

export const ProductCountryOriginOptions = [
  { key: 'KO', name: '대한민국' },
  { key: 'USA', name: '미국' },
  { key: 'JP', name: '일본' },
  { key: 'CH', name: '중국' },
  { key: 'RU', name: '러시아' },
  { key: 'UK', name: '영국' },
  { key: 'VI', name: '베트남' },
  { key: 'AU', name: '호주' },
];

export const ProductInformationProvisionNoticeItem = {
  WEAR: '의류',
  SHOES: '구두/신발',
  BAG: '가방',
  FASHION_ITEMS: '패션잡화 (모자 / 벨트 / 액세서리 등)',
  SLEEPING_GEAR: '침구류 / 커튼',
  FURNITURE: '가구 (침대 / 소파 / 싱크대 / DIY제품 등',
  IMAGE_APPLIANCES: '영상가전 (TV류)',
  HOME_APPLIANCES: '가정용 전기제품 (냉장고 / 세탁기 / 식기세척기 / 전자레인지 등)',
  SEASON_APPLIANCES: '계절가전 (에어컨 / 온풍기 등)',
  OFFICE_APPLIANCES: '사무용기긱 (컴퓨터 / 노트북 / 프린터 등)',
  OPTICS_APPLIANCES: '광학기기 (디지털카메라 / 캠코터 등)',
  MICROELECTRONICS: '소형가전 (MP3 / 전자사전 등)',
  NAVIGATION: '내비게이션',
  CAR_ARTICLES: '자동차용품 (자동차부품 / 기타 자동차용품 등)',
  MEDICAL_APPLIANCES: '의료기기',
  KITCHEN_UTENSILS: '주방용품',
  COSMETIC: '화장품',
  JEWELLERY: '귀금속 / 보석 / 시계류',
  FOOD: '농수축산물',
  GENERAL_FOOD: '가공식품',
  DIET_FOOD: '건강기능식품',
  KIDS: '어린이제품',
  MUSICAL_INSTRUMENT: '악기',
  SPORTS_EQUIPMENT: '스포츠용품',
  BOOKS: '서적',
  RESERVATION: '호텔 / 펜션 예약',
  TRAVEL_PACKAGE: '여행패키지',
  AIRLINE_TICKET: '항공권',
  RENTAL_CAR: '자동차 대여 서비스 (렌터카)',
  RENTAL_APPLIANCES: '물품대여 서비스(정수기, 비데, 공기청정기 등)',
  RENTAL_ETC: '물품대여 서비스(서적, 유아용품, 행사용품 등)',
  GIFT_CARD_COUPON: '상품권 / 쿠폰',
  MOBILE_COUPON: '모바일 쿠폰',
  BIOCIDAL: '살생물제품',
  ETC_SERVICE: '기타 용역',
  ETC: '기타 재화',
};

export const ProductInformationProvisionNoticeItems = [
  { itemCode: 'WEAR', name: '의류' },
  { itemCode: 'SHOES', name: '구두 / 신발' },
  { itemCode: 'BAG', name: '가방' },
  { itemCode: 'pipn004', name: '패션잡화 (모자 / 벨트 / 액세서리 등)' },
  { itemCode: 'pipn005', name: '침구류 / 커튼' },
  { itemCode: 'pipn006', name: '가구 (침대 / 소파 / 싱크대 / DIY제품 등' },
  { itemCode: 'pipn007', name: '영상가전 (TV류)' },
  { itemCode: 'pipn008', name: '가정용 전기제품 (냉장고 / 세탁기 / 식기세척기 / 전자레인지 등)' },
  { itemCode: 'pipn009', name: '계절가전 (에어컨 / 온풍기 등)' },
  { itemCode: 'pipn010', name: '사무용기긱 (컴퓨터 / 노트북 / 프린터 등)' },
  { itemCode: 'pipn011', name: '광학기기 (디지털카메라 / 캠코터 등)' },
  { itemCode: 'pipn012', name: '소형가전 (MP3 / 전자사전 등)' },
  { itemCode: 'pipn013', name: '휴대형 통신기기 (휴대폰 / 태블릿 등)' },
  { itemCode: 'pipn014', name: '내비게이션' },
  { itemCode: 'pipn015', name: '자동차용품 (자동차부품 / 기타 자동차용품 등)' },
  { itemCode: 'pipn016', name: '의료기기' },
  { itemCode: 'pipn017', name: '주방용품' },
  { itemCode: 'pipn018', name: '화장품' },
  { itemCode: 'pipn019', name: '귀금속 / 보석 / 시계류' },
  { itemCode: 'pipn020', name: '농수축산물' },
  { itemCode: 'pipn021', name: '가공식품' },
  { itemCode: 'pipn022', name: '건강기능식품' },
  { itemCode: 'pipn023', name: '어린이제품' },
  { itemCode: 'pipn024', name: '악기' },
  { itemCode: 'pipn025', name: '스포츠용품' },
  { itemCode: 'pipn026', name: '서적' },
  { itemCode: 'pipn027', name: '호텔 / 펜션 예약' },
  { itemCode: 'pipn028', name: '여행패키지' },
  { itemCode: 'pipn029', name: '항공권' },
  { itemCode: 'pipn030', name: '자동차 대여 서비스 (렌터카)' },
  { itemCode: 'pipn031', name: '물품대여 서비스(정수기, 비데, 공기청정기 등)' },
  { itemCode: 'pipn032', name: '물품대여 서비스(서적, 유아용품, 행사용품 등)' },
  { itemCode: 'pipn033', name: '디지털 콘텐츠 (음원, 게임, 인터넷강의 등)' },
  { itemCode: 'pipn034', name: '상품권 / 쿠폰' },
  { itemCode: 'pipn035', name: '모바일 쿠폰' },
  { itemCode: 'pipn036', name: '영화ㆍ공연' },
  { itemCode: 'pipn037', name: '생활화학제품' },
  { itemCode: 'pipn038', name: '살생물제품' },
  { itemCode: 'pipn039', name: '기타 용역' },
  { itemCode: 'pipn040', name: '기타 재화' },
];

interface CommonType {
  [key: string]: string;
  key: string;
  name: string;
  value: string;
}
interface ProductInformationProvisionNoticeType {
  [key: string]: CommonType[];
}

export const ProductInformationProvisionNoticeItemContents: ProductInformationProvisionNoticeType = {
  WEAR: [
    { key: 'material', name: '제품 소재 (섬유의 조성 또는 혼용율을 백분율로 표시, 기능성인 경우 성적서 또는 허가서)', value: '' },
    { key: 'color', name: '색상', value: '' },
    { key: 'size', name: '치수', value: '' },
    { key: 'manufacturer', name: '제조자, 수입품의 경우 수입자를 함께 표기 (병행수입의 경우 병행수입 여부로 대체 가능)', value: '' },
    { key: 'countryOfManufacture', name: '제조국', value: '' },
    { key: 'washing', name: '세탁방법 및 취급시 주의사항', value: '' },
    { key: 'dateOfManufacture', name: '제조연월', value: '' },
    { key: 'quality', name: '품질보증기준', value: '' },
    { key: 'afterServiceTelecom', name: 'A/S 책임자와 전화번호', value: '' },
  ],
  SHOES: [
    { key: 'material', name: '제품 주소재 (운동화인 경우에는 겉감, 안감을 구분하여 표시)', value: '' },
    { key: 'color', name: '색상', value: '' },
    { key: 'size', name: '발길이', value: '' },
    { key: 'height', name: '굽높이', value: '' },
    { key: 'manufacturer', name: '제조자, 수입품의 경우 수입자를 함께 표기 (병행수입의 경우 병행수입 여부로 대체 가능) ', value: '' },
    { key: 'countryOfManufacture', name: '제조국 ', value: '' },
    { key: 'caution', name: '취급시 주의사항', value: '' },
    { key: 'dateOfManufacture', name: '제조연월', value: '' },
    { key: 'quality', name: '품질보증기준', value: '' },
    { key: 'afterServiceTelecom', name: 'A/S 책임자와 전화번호', value: '' },
  ]
};

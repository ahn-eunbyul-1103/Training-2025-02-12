// * 주소에 많은 key 값과 value 가 존재한다.
const URL = `
itemId=29104149012123&
vendorItemId=14924929194&
sourceType=srp_product_ads&
clickEventId=3233f23-ef12-11ef-cfs2-askdk12ek&
korePlacement=15&
koreSubPlacement=1&q=%ED%81%90%EB%B8%BC&
itemsCount=31&
searchId=3b4e738137842&
rank=0&
searchRank=0&
isAddedCart=123
`;
const qs = require('querystring'); // 쿼리스트링 라이브러리 불러오기

console.log(qs.parse(URL));
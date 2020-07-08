const json2xml = ({products, discount}) => {

  let productElements = '';

  products.forEach(product => {
    productElements = productElements + `<product><id>${product.id}</id><size>${product.size}</size></product>`
  });

  return ( 
  `<?xml version="1.0" encoding="UTF-8"?>` +
  `<order>` +
  `<discount>${discount}</discount>` +
  `<products>` +
  `${productElements}` +
  `</products>` +
  `</order>`
  )
}

export default json2xml;
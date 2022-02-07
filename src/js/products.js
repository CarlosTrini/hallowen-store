const decorations = [
  {
    "id": "decoration-1",
    "category": "decoration",
    "name": "ghost",
    "description": "pendant",
    "discount": "24.99",
    "price": "17.99",
    "imgwebp": "./images/img-deco-1.webp",
    "imgpng": "./images/img-deco-1.png",
  },
  {
    "id": "decoration-2",
    "category": "decoration",
    "name": "watch skull",
    "description": "paper weight",
    "discount": "44.99",
    "price": "34.99",
    "imgwebp": "./images/img-deco-2.webp",
    "imgpng": "./images/img-deco-2.png",
  },
  {
    "id": "decoration-3",
    "category": "decoration",
    "name": "sister pumpkins",
    "description": "scented candle",
    "discount": "11.99",
    "price": "9.99",
    "imgwebp": "./images/img-deco-3.webp",
    "imgpng": "./images/img-deco-3.png",
  },
];
const goodies = [
  {
    "id": "goodie-1",
    "category": "goodie",
    "name": "pumpkin candy",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    "discount": "24.99",
    "price": "17.99",
    "imgwebp": "./images/img-goodies-1.webp",
    "imgpng": "./images/img-goodies-1.png",
  },
  {
    "id": "goodie-2",
    "category": "goodie",
    "name": "liqueur candy",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    "discount": "44.99",
    "price": "34.99",
    "imgwebp": "./images/img-goodies-2.webp",
    "imgpng": "./images/img-goodies-2.png",
  },
  {
    "id": "goodie-3",
    "category": "goodie",
    "name": "jully eyes",
    "description": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. ",
    "discount": "11.99",
    "price": "9.99",
    "imgwebp": "./images/img-goodies-3.webp",
    "imgpng": "./images/img-goodies-3.png",
  }
];
const accessories = [
  {
    "id": 'accessory-1',
    "category": "accessory",
    "name": "ghost",
    "characteristic": "amazing colors" ,
    "description": "pendant",
    "discount": "24.99",
    "price": "17.99",
    "imgwebp": "./images/img-accessory-1.webp",
    "imgpng": "./images/img-accessory-1.png",
  },
  {
    "id": 'accessory-2',
    "category": "accessory",
    "name": "watch skull",
    "characteristic": "various sizes" ,
    "description": "paper weight",
    "discount": "44.99",
    "price": "34.99",
    "imgwebp": "./images/img-accessory-2.webp",
    "imgpng": "./images/img-accessory-2.png",
  },
  {
    "id": 'accessory-3',
    "category": "accessory",
    "name": "sister pumpkins",
    "characteristic": "assorted prints" ,
    "description": "scented candle",
    "discount": "11.99",
    "price": "9.99",
    "imgwebp": "./images/img-accessory-3.webp",
    "imgpng": "./images/img-accessory-3.png",
  }
];


const fragment = document.createDocumentFragment();

// ------------------DECORATIONS SECTION
const templateDeco = document.querySelector('#templateDecorations').content;

decorations.forEach(({ name, imgpng, imgwebp, description, discount, price }) => {
  templateDeco.querySelector('#decoTitle').textContent = name;
  templateDeco.querySelector('#imgWebp').srcset = imgwebp;
  templateDeco.querySelector('#imgPng').srcset = imgpng;
  templateDeco.querySelector('#imgPng').alt = `${name} - ${description}`;
  templateDeco.querySelector('#imgPng').title = `${name} - ${description}`;
  templateDeco.querySelector('#decoDescription').textContent = description;
  templateDeco.querySelector('#decoDiscount').textContent = `$${discount}`;
  templateDeco.querySelector('#decoPrice').textContent = `$${price}`;

  const clone = templateDeco.cloneNode(true);
  fragment.appendChild(clone);
});
document.querySelector('#decoContainer').appendChild(fragment);

// -------------------------------GODDIES SECTION
const templateGood = document.querySelector('#templateGoodies').content;

goodies.forEach(({ name, imgpng, imgwebp, description, price }) => {
  templateGood.querySelector('#goodTitle').textContent = name;
  templateGood.querySelector('#goodImgWebp').srcset = imgwebp;
  templateGood.querySelector('#goodImgPng').srcset = imgpng;
  templateGood.querySelector('#goodImgPng').alt = `${name} - ${description}`;
  templateGood.querySelector('#goodImgPng').title = `${name} - ${description}`;
  templateGood.querySelector('#goodDescription').textContent = description;
  templateGood.querySelector('#goodPrice').textContent = `$${price}`;

  const clone = templateGood.cloneNode(true);
  fragment.appendChild(clone);
});
document.querySelector('#goodContainer').appendChild(fragment);


// -------------------------ACCESSORIES SECTION
const templateAcc = document.querySelector('#accessoriesTemplate').content;

accessories.forEach(({ name, imgpng, imgwebp, discount, description, price, characteristic }) => {
   templateAcc.querySelector('#accessoryTitle').textContent = name;
   templateAcc.querySelector('#accessoryImgWebp').srcset = imgwebp;
   templateAcc.querySelector('#accessoryImgPng').src = imgpng;
   templateAcc.querySelector('#accessoryImgPng').alt = `${name} - ${characteristic}`;
   templateAcc.querySelector('#accessoryImgPng').title = `${name} - ${characteristic}`;
   templateAcc.querySelector('#accessoryCharacteristic').textContent = characteristic;
   templateAcc.querySelector('#accessoryDiscount').textContent = `$${discount}`;
   templateAcc.querySelector('#accessoryPrice').textContent = `$${price}`;


  const clone = templateAcc.cloneNode(true);
  fragment.appendChild(clone);
});
document.querySelector('#accessoriesContainer').appendChild(fragment);
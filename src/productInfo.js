const b = a => {
  return a
    ? (a ^ ((Math.random() * 16) >> (a / 4))).toString(16)
    : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
};

const randGen = () => Math.round(Math.random() * 10 + 1);

const productInfo = [
  {
    key: b(),
    productName: "T-shirt",
    productDescription:
      "Just a regular plain tee with a logo on the front ... nothing out of the ordinary",
    productImgUrl: "/img/t-shirt.jpg",
    productPrice: 9.99,
    productQty: randGen()
  },
  {
    key: b(),
    productName: "Shorts",
    productDescription: "A pair of shorts, nice for a walk around town",
    productImgUrl: "/img/shorts.png",
    productPrice: 14.99,
    productQty: randGen()
  },
  {
    key: b(),
    productName: "Amazon Echo Dot",
    productDescription: "Your new best friend, great for home automation",
    productImgUrl: "/img/amazon-dot.png",
    productPrice: 99.99,
    productQty: randGen()
  },
  {
    key: b(),
    productName: "Wooden Stool",
    productDescription: "A place to sit when you get tired",
    productImgUrl: "/img/stool.png",
    productPrice: 10.99,
    productQty: randGen()
  },
  {
    key: b(),
    productName: "Kindle Paperwhite",
    productDescription: "The most popular e-book reader from Amazon",
    productImgUrl: "/img/kindle-paperwhite.png",
    productPrice: 99.99,
    productQty: randGen()
  },
  {
    key: b(),
    productName: "Blue Jeans",
    productDescription: "A pair of faded jeans in its most popular colour",
    productImgUrl: "/img/jeans.png",
    productPrice: 19.99,
    productQty: randGen()
  },
  {
    key: b(),
    productName: "Camera",
    productDescription:
      "A vintage camera, not really useful now that cell phones have cameras ... looks cool though I guess",
    productImgUrl: "/img/camera.png",
    productPrice: 119.99,
    productQty: randGen()
  },
  {
    key: b(),
    productName: "Bow-Tie",
    productDescription: "For when you want to look both patriotic and smart",
    productImgUrl: "/img/Bow-Tie.png",
    productPrice: 9.99,
    productQty: randGen()
  },
  {
    key: b(),
    productName: "AA Battery",
    productDescription: "For all your power needs",
    productImgUrl: "/img/AA battery.png",
    productPrice: 1.99,
    productQty: randGen()
  },
  {
    key: b(),
    productName: "Coffee Maker",
    productDescription: "Makes 4 cups of joe at once. Just don't ask who he is",
    productImgUrl: "/img/Coffee-Maker.png",
    productPrice: 79.99,
    productQty: randGen()
  },
  {
    key: b(),
    productName: "Brass Belt Buckle",
    productDescription: "Belt not included",
    productImgUrl: "/img/Brass Belt Buckle.png",
    productPrice: 29.99,
    productQty: randGen()
  }
];

export default productInfo;

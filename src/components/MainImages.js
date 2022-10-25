import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
  return (
    <ImageList sx={{ width: "100%", height: "100%" }} cols={4} rowHeight={500}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://m.media-amazon.com/images/I/61a03Zq9oRL._AC_.jpg',
    title: 'Black Pather',
  },
  {
    img: 'https://m.media-amazon.com/images/I/71BPuv+iRbL.jpg',
    title: 'Back to the Future',
  },
  {
    img: 'https://i.etsystatic.com/18242346/r/il/54bef3/2802148755/il_570xN.2802148755_7wzt.jpg',
    title: 'Soul',
  },
  {
    img: 'https://sm.ign.com/t/ign_za/gallery/s/spider-man/spider-man-far-from-home-official-movie-posters_ex7e.1080.jpg',
    title: 'Spider-Man',
  },
  {
    img: 'https://www.digitalartsonline.co.uk/cmsdata/slideshow/3662115/baby-driver-rory-hi-res.jpg',
    title: 'Baby Driver',
  },
  {
    img: 'https://media1.popsugar-assets.com/files/thumbor/z5oKgNC9S4DS6Bay78Aoy5aLO4s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/26/813/n/1922283/055dc333c3280d59_BeautyAndTheBeast58726d5b9fac8/i/Beauty-Beast-2017-Movie-Posters.jpg',
    title: 'Beauty and the Beast',
  },
  {
    img: 'https://m.media-amazon.com/images/I/51XHj3mBhrL._AC_SY780_.jpg',
    title: 'Hobbit',
  },
  {
    img: 'https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png',
    title: 'Shrek',
  },
  {
    img: 'https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/268821/4556789/apiihy1mm__31528.1625622408.jpg?c=2',
    title: 'Avengers',
  },
  {
    img: 'https://i.ebayimg.com/images/g/nHQAAOSwQ8hhoMr~/s-l500.jpg',
    title: 'Harry Potter',
  },
  {
    img: 'https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/wjnhpz3osrai5aningjl/titanic?fimg-client-default',
    title: 'Titanic',
  },
  {
    img: 'https://i.ebayimg.com/images/g/qYYAAOSw1odgo4~~/s-l500.jpg',
    title: 'Deadpool',
  },
];
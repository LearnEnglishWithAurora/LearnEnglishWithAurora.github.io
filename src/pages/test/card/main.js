import '/index.css';

const card = document.querySelector(".card").children[0];

card.addEventListener("click", function (e) {
  if (!card.classList.contains('is-flipped'))
    card.classList.toggle('is-flipped');
});

let revealed = false;
card.addEventListener("transitionend", function () {
  revealed = true;
  console.log(revealed);
}, false);

dragElement(card);

function dragElement(element) {
  let initialX = null, initialY = null;

  element.addEventListener('mousedown', dragStart, false);
  element.addEventListener('touchstart', dragStart, false);

  function dragStart(e) {
    if (revealed) {
      initialX = e.clientX === undefined ? e.touches[0].clientX : e.clientX;
      initialY = e.clientY === undefined ? e.touches[0].clientY : e.clientY;
      document.addEventListener('mousemove', dragMove, false);
      document.addEventListener('touchmove', dragMove, false);
      document.addEventListener('mouseup', dragEnd, false);
      document.addEventListener('touchend', dragEnd, false);
    }
  }

  function dragMove(e) {
    if (revealed) {
      if (initialX === null || initialY === null) return;

      const currentX = e.clientX === undefined ? e.touches[0].clientX : e.clientX;
      const currentY = e.clientY === undefined ? e.touches[0].clientY : e.clientY;

      const deltaX = currentX - initialX;
      const deltaY = currentY - initialY;

      initialX = currentX;
      initialY = currentY;

      element.style.top = element.offsetTop + deltaY + "px";
      element.style.left = element.offsetLeft + deltaX + "px";

      const rad = element.style.left.slice(0, -2) / window.innerWidth;
      element.style.transform = 'rotate(' + -rad + 'rad) rotateY(180deg)';
    }
  }

  function dragEnd(e) {
    initialX = null;
    initialY = null;

    document.removeEventListener('mousemove', dragMove, false);
    document.removeEventListener('touchmove', dragMove, false);
    document.removeEventListener('mouseup', dragEnd, false);
    document.removeEventListener('touchend', dragEnd, false);
  }
}

// import * as cheerio from 'cheerio';
// import axios from 'axios';
// const getNewsData = () => {
//   return axios
//     .get(
//       "https://www.freepik.com/icons/api",
//       {
//         headers: {
//           "Access-Control-Allow-Origin": "*",
//           "Cache-Control": "no-cache",
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         "User-Agent":
//           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
//       }
//     )
//     .then((response) => {
//       console.log(response)
//       let $ = cheerio.load(response.data);
//       console.log(
//         $("._1ys1uvig").attr("src").replace('/256/', '/512/'),
//       );
//     });
// };
// getNewsData();


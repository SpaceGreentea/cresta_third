'use strict'

{
  // ナビゲーションメニュー　ページ内リンク
  // ------------------------------------------
  // $('#page-link a[href*="#"]').click(function () {//全てのページ内リンクに適用させたい場合はa[href*="#"]のみでもOK
  //   var adjust = -120; //margin-topを調整
  //   var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
  //   var pos = $(elmHash).offset().top + adjust;	//idの上部の距離を取得
  //   $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
  //   return false;
  // });
  // ------------------------------------------


  // ------------------------------------------
  // 一つだけで動くか確認→結果:動いた  参考:https://qumeru.com/magazine/293
  // const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  // console.log(smoothScrollTrigger);

  // smoothScrollTrigger[0].addEventListener('click', (e) => {
  //   e.preventDefault();
  //   let href = smoothScrollTrigger[0].getAttribute('href');
  //   console.log(href);
  //   let targetElement = document.getElementById(href.replace('#', ''));
  //   console.log(targetElement);

  //   const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
  //   console.log(rect);
  //   const offset = window.scrollY; // 現在のスクロール量を取得
  //   console.log(offset);
  //   const target = rect + offset;
  //   console.log(target);

  //   // 4. スムースにスクロール
  //   window.scrollTo({
  //     top: target,
  //     behavior: 'smooth',
  //   });
  // });
  // ------------------------------------------

  // ------------------------------------------
  const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  console.log(smoothScrollTrigger);

  // ABOUT US用スムーススクロール
  smoothScrollTrigger[0].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[0].getAttribute('href');
    // console.log(href);
    let targetElement = document.getElementById(href.replace('#', ''));
    // console.log(targetElement);

    // const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
    const rect = targetElement.getBoundingClientRect().bottom; // ブラウザからの高さを取得
    // console.log(rect);
    const offset = window.scrollY; // 現在のスクロール量を取得
    // console.log(offset);
    const target = rect + offset;
    // console.log(target);

    // スムースにスクロール
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });

  // WORKS用スムーススクロール
  smoothScrollTrigger[1].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[1].getAttribute('href');
    // console.log(href);
    let targetElement = document.getElementById(href.replace('#', ''));
    // console.log(targetElement);

    const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
    // const rect = targetElement.getBoundingClientRect().bottom; // ブラウザからの高さを取得
    // console.log(rect);
    const offset = window.scrollY; // 現在のスクロール量を取得
    // console.log(offset);
    const target = rect + offset;
    // console.log(target);

    // スムースにスクロール
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });

  // culture用スムーススクロール
  smoothScrollTrigger[2].addEventListener('click', (e) => {
    e.preventDefault();
    let targetElement;


    if (window.matchMedia('(max-width: 1279px)').matches) {
      let href = smoothScrollTrigger[2].getAttribute('href');
      // console.log(href);
      targetElement = document.getElementById(href.replace('#', ''));
    } else if (window.matchMedia('(max-width: 767px)').matches) {
      let href = smoothScrollTrigger[2].getAttribute('href');
      // console.log(href);
      targetElement = document.getElementById(href.replace('#', ''));
    } else {
      let href = smoothScrollTrigger[1].getAttribute('href');
      // console.log(href);
      targetElement = document.getElementById(href.replace('#', ''));
    }

    // console.log(targetElement);

    // let href = smoothScrollTrigger[2].getAttribute('href');
    // console.log(href);
    // let targetElement = document.getElementById(href.replace('#', ''));
    // console.log(targetElement);

    const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
    // const rect = targetElement.getBoundingClientRect().bottom; // ブラウザからの高さを取得
    // console.log(rect);
    const offset = window.scrollY; // 現在のスクロール量を取得
    // console.log(offset);
    const target = rect + offset;
    // console.log(target);

    // スムースにスクロール
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });

  // topics用スムーススクロール
  smoothScrollTrigger[3].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[3].getAttribute('href');
    // console.log(href);
    let targetElement = document.getElementById(href.replace('#', ''));
    // console.log(targetElement);

    const a = document.querySelector('.section_topics button').getBoundingClientRect().bottom;
    // console.log(a);
    const b = document.querySelector('.section_contact').getBoundingClientRect().top;
    // console.log(b);

    const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
    // const rect = targetElement.getBoundingClientRect().bottom; // ブラウザからの高さを取得
    // console.log(rect);
    const offset = window.scrollY; // 現在のスクロール量を取得
    // console.log(offset);

    // const target = rect + offset;
    const target = rect + offset - (b - a);
    // console.log(target);

    // スムースにスクロール
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });

  // CONTACT用スムーススクロール
  smoothScrollTrigger[4].addEventListener('click', (e) => {
    e.preventDefault();
    let href = smoothScrollTrigger[4].getAttribute('href');
    // console.log(href);
    let targetElement = document.getElementById(href.replace('#', ''));
    // console.log(targetElement);

    const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
    // const rect = targetElement.getBoundingClientRect().bottom; // ブラウザからの高さを取得
    // console.log(rect);
    const offset = window.scrollY; // 現在のスクロール量を取得
    // console.log(offset);
    const target = rect + offset;
    // console.log(target);

    // スムースにスクロール
    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  });
  // ------------------------------------------
}
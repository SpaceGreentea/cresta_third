'use strict'

{
  // ハンバーガーメニューをクリックした時の処理

  // ハンバーガーメニュー（三本線とMENUの文字）
  const hamburgerMenuWhole = document.querySelector(".humburger-menu-whole");

  // ハンバーガーメニュー（三本線）
  const hamburgerMenu = document.querySelector(".humburger-menu");

  // ハンバーガーメニューがクリックされたときに表示されるメニュー画面
  const navi = document.getElementById("hamburger-navigation");

  // ハンバーガーメニュー内の各セクションの要素
  const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");

  // ハンバーガーメニューがクリックされた時に表示される左側の薄暗いマスク部分
  const left_mask = document.querySelector(".left-mask");

  // ハンバーガーメニューをクリックした時の処理
  hamburgerMenuWhole.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle("active");
    left_mask.classList.toggle("active");
    hamburgerMenuWhole.classList.toggle("fix-active");
    hamburgerMoji.classList.toggle("active");
  });

  // active状態のマスク部分をクリックした時
  left_mask.addEventListener("click", function () {
    // header_top_mask.classList.remove("header-top-mask.active");
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle("active");
    left_mask.classList.toggle("active");
    hamburgerMenuWhole.classList.toggle("fix-active");
    hamburgerMoji.classList.toggle("active");
  });

  // ナビゲーションメニューの各リンクをクリックした時
  hamburgerMenuSections.forEach((hamburgerMenuSection) => {
    hamburgerMenuSection.addEventListener("click", function () {
      hamburgerMenu.classList.toggle("active");
      navi.classList.toggle("active");
      left_mask.classList.toggle("active");
      hamburgerMenuWhole.classList.toggle("fix-active");
      hamburgerMoji.classList.toggle("active");
    });
  });





  //　ヘッダーサイトロゴ　ハンバーガーメニュー　スクロールして色を変える　参考：https://ws-pilgrimage.jp/webcreate/3416/

  //------------------------------
  // window.addEventListener('scroll', function () {
  //   const element = document.getElementsByClassName('text');
  //   const window_height = window.innerHeight; //現在のブラウザの高さを取得する
  //   for (i = 0; i < element.length; i++) {
  //     const element_height = element[i].getBoundingClientRect().bottom; //要素の位置（座標）を取得する
  //     if (element_height < window_height * 0.5) {
  //       element[i].classList.add('text_red');
  //     } else {
  //       element[i].classList.remove('text_red');
  //     }
  //   }
  // });
  //------------------------------

  const hamburgerMenuSpan1 = document.querySelector(".humburger-menu-span1");
  const hamburgerMenuSpan2 = document.querySelector(".humburger-menu-span2");
  const hamburgerMenuSpan3 = document.querySelector(".humburger-menu-span3");
  const hamburgerMoji = document.querySelector(".moji");
  let siteLogo = document.querySelector(".site-logo");

  let i; // iを定義しないとエラーになる。
  window.addEventListener('scroll', function () {
    const element = document.getElementsByClassName('scroll-target');
    console.log(element);
    const window_height = window.innerHeight; //現在のブラウザの高さを取得する
    console.log(window_height);
    const hamburger_bottom = document.querySelector(".humburger-menu-whole").getBoundingClientRect().bottom;
    console.log(hamburger_bottom);

    for (i = 0; i < element.length; i++) {
      const element_height = element[i].getBoundingClientRect().bottom; //要素の位置（座標）を取得する
      console.log(element_height);

      if (element_height < hamburger_bottom) {
        hamburgerMenuSpan1.classList.add('scroll-black');
        hamburgerMenuSpan2.classList.add('scroll-black');
        hamburgerMenuSpan3.classList.add('scroll-black');
        hamburgerMoji.classList.add('scroll-black');
        siteLogo.src = "./img/site-logo-pc-black.svg";
      } else {
        hamburgerMenuSpan1.classList.remove('scroll-black');
        hamburgerMenuSpan2.classList.remove('scroll-black');
        hamburgerMenuSpan3.classList.remove('scroll-black');
        hamburgerMoji.classList.remove('scroll-black');
        siteLogo.src = "./img/site-logo-pc.svg";
      }
    }
  });



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

  // // ------------------------------------------
  // const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  // console.log(smoothScrollTrigger);

  // // ABOUT US用スムーススクロール
  // smoothScrollTrigger[0].addEventListener('click', (e) => {
  //   e.preventDefault();
  //   let href = smoothScrollTrigger[0].getAttribute('href');
  //   // console.log(href);
  //   let targetElement = document.getElementById(href.replace('#', ''));
  //   // console.log(targetElement);

  //   // const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
  //   const rect = targetElement.getBoundingClientRect().bottom; // ブラウザからの高さを取得
  //   // console.log(rect);
  //   const offset = window.scrollY; // 現在のスクロール量を取得
  //   // console.log(offset);
  //   const target = rect + offset;
  //   // console.log(target);

  //   // スムースにスクロール
  //   window.scrollTo({
  //     top: target,
  //     behavior: 'smooth',
  //   });
  // });

  // // WORKS用スムーススクロール
  // smoothScrollTrigger[1].addEventListener('click', (e) => {
  //   e.preventDefault();
  //   let href = smoothScrollTrigger[1].getAttribute('href');
  //   // console.log(href);
  //   let targetElement = document.getElementById(href.replace('#', ''));
  //   // console.log(targetElement);

  //   const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
  //   // const rect = targetElement.getBoundingClientRect().bottom; // ブラウザからの高さを取得
  //   // console.log(rect);
  //   const offset = window.scrollY; // 現在のスクロール量を取得
  //   // console.log(offset);
  //   const target = rect + offset;
  //   // console.log(target);

  //   // スムースにスクロール
  //   window.scrollTo({
  //     top: target,
  //     behavior: 'smooth',
  //   });
  // });

  // // culture用スムーススクロール
  // smoothScrollTrigger[2].addEventListener('click', (e) => {
  //   e.preventDefault();
  //   let targetElement;


  //     if (window.matchMedia('(max-width: 1279px)').matches) {
  //       let href = smoothScrollTrigger[2].getAttribute('href');
  //       // console.log(href);
  //       targetElement = document.getElementById(href.replace('#', ''));
  //     } else if (window.matchMedia('(max-width: 767px)').matches) {
  //       let href = smoothScrollTrigger[2].getAttribute('href');
  //       // console.log(href);
  //       targetElement = document.getElementById(href.replace('#', ''));
  //     } else {
  //       let href = smoothScrollTrigger[1].getAttribute('href');
  //       // console.log(href);
  //       targetElement = document.getElementById(href.replace('#', ''));
  //     }

  //   // console.log(targetElement);

  //   // let href = smoothScrollTrigger[2].getAttribute('href');
  //   // console.log(href);
  //   // let targetElement = document.getElementById(href.replace('#', ''));
  //   // console.log(targetElement);

  //   const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
  //   // const rect = targetElement.getBoundingClientRect().bottom; // ブラウザからの高さを取得
  //   // console.log(rect);
  //   const offset = window.scrollY; // 現在のスクロール量を取得
  //   // console.log(offset);
  //   const target = rect + offset;
  //   // console.log(target);

  //   // スムースにスクロール
  //   window.scrollTo({
  //     top: target,
  //     behavior: 'smooth',
  //   });
  // });

  // // topics用スムーススクロール
  // smoothScrollTrigger[3].addEventListener('click', (e) => {
  //   e.preventDefault();
  //   let href = smoothScrollTrigger[3].getAttribute('href');
  //   // console.log(href);
  //   let targetElement = document.getElementById(href.replace('#', ''));
  //   // console.log(targetElement);

  //   const a = document.querySelector('.section_topics button').getBoundingClientRect().bottom;
  //   // console.log(a);
  //   const b = document.querySelector('.section_contact').getBoundingClientRect().top;
  //   // console.log(b);

  //   const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
  //   // const rect = targetElement.getBoundingClientRect().bottom; // ブラウザからの高さを取得
  //   // console.log(rect);
  //   const offset = window.scrollY; // 現在のスクロール量を取得
  //   // console.log(offset);

  //   // const target = rect + offset;
  //   const target = rect + offset - (b - a);
  //   // console.log(target);

  //   // スムースにスクロール
  //   window.scrollTo({
  //     top: target,
  //     behavior: 'smooth',
  //   });
  // });

  // // CONTACT用スムーススクロール
  // smoothScrollTrigger[4].addEventListener('click', (e) => {
  //   e.preventDefault();
  //   let href = smoothScrollTrigger[4].getAttribute('href');
  //   // console.log(href);
  //   let targetElement = document.getElementById(href.replace('#', ''));
  //   // console.log(targetElement);

  //   const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
  //   // const rect = targetElement.getBoundingClientRect().bottom; // ブラウザからの高さを取得
  //   // console.log(rect);
  //   const offset = window.scrollY; // 現在のスクロール量を取得
  //   // console.log(offset);
  //   const target = rect + offset;
  //   // console.log(target);

  //   // スムースにスクロール
  //   window.scrollTo({
  //     top: target,
  //     behavior: 'smooth',
  //   });
  // });
  // // ------------------------------------------

}
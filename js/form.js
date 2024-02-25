'use strict'

{
  // プライバシーポリシー チェックボックス
  // 参考：https://tamatuf.net/tips/privacy-policy-scroll-check/
  const agree = document.getElementById('privacyPolicy');
  const element = document.getElementById('privacyCheck');
  const checkbox = document.querySelector("input[type='checkbox']");
  checkbox.disabled = true;
  agree.addEventListener('scroll', function () {
    if (Math.abs(agree.scrollHeight - agree.clientHeight - agree.scrollTop) <= 1) {
      checkbox.disabled = false;
      element.classList.remove('check-disabled');
    }
  });

  // 送信ボタン
  // 参考：https://tech-blog.tomono.jp/archives/1321#index_id9
  document.addEventListener('DOMContentLoaded', function (event) {
    const targetButton = document.getElementById('submitButton');
    // console.log(targetButton);
    const triggerCheckbox = document.querySelector('input[name="privacy"]');
    // console.log(triggerCheckbox);

    targetButton.disabled = true;
    // targetButton.classList.add('is-inactive');

    triggerCheckbox.addEventListener('change', function () {
      if (this.checked) {
        targetButton.disabled = false;
        // targetButton.classList.remove('is-inactive');
        // targetButton.classList.add('is-active');
      } else {
        targetButton.disabled = true;
        // targetButton.classList.remove('is-active');
        // targetButton.classList.add('is-inactive');
      }
    }, false);
  }, false);
}
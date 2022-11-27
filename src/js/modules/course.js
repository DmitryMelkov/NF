export function course() {
  const links = document.querySelectorAll('.course-body__link');

  for (const link of links) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
    });
  }

  //basics
  const cardsItemBasics1 = document.querySelector('.course-body__basics-box--left-1');
  const cardsBtnBasics1 = document.querySelector('.course-body__basics-btn-1');

  const cardsItemBasics2 = document.querySelector('.course-body__basics-box--left-2');
  const cardsBtnBasics2 = document.querySelector('.course-body__basics-btn-2');

  const cardsItemBasics3 = document.querySelector('.course-body__basics-box--left-3');
  const cardsBtnBasics3 = document.querySelector('.course-body__basics-btn-3');

  const cardsItemBasics4 = document.querySelector('.course-body__basics-box--left-4');
  const cardsBtnBasics4 = document.querySelector('.course-body__basics-btn-4');

  const imgBtnBasics = document.querySelector('.course-body__img-content-1');

  //market
  const cardsItemMarket1 = document.querySelector('.course-body__market-box--right-1');
  const cardsBtnMarket1 = document.querySelector('.course-body__market-btn-1');

  const cardsItemMarket2 = document.querySelector('.course-body__market-box--right-2');
  const cardsBtnMarket2 = document.querySelector('.course-body__market-btn-2');

  const cardsItemMarket3 = document.querySelector('.course-body__market-box--right-3');
  const cardsBtnMarket3 = document.querySelector('.course-body__market-btn-3');

  const cardsItemMarket4 = document.querySelector('.course-body__market-box--right-4');
  const cardsBtnMarket4 = document.querySelector('.course-body__market-btn-4');

  const imgBtnMarket = document.querySelector('.course-body__img-content-2');

  //market
  const cardsItemTools1 = document.querySelector('.course-body__tools-box--left-1');
  const cardsBtnTools1 = document.querySelector('.course-body__tools-btn-1');

  const cardsItemTools2 = document.querySelector('.course-body__tools-box--left-2');
  const cardsBtnTools2 = document.querySelector('.course-body__tools-btn-2');

  const cardsItemTools3 = document.querySelector('.course-body__tools-box--left-3');
  const cardsBtnTools3 = document.querySelector('.course-body__tools-btn-3');

  const imgBtnTools = document.querySelector('.course-body__img-content-3');

  //strategy
  const cardsItemStrategy1 = document.querySelector('.course-body__strategy-box--right-1');
  const cardsBtnStrategy1 = document.querySelector('.course-body__strategy-btn-1');

  const cardsItemStrategy2 = document.querySelector('.course-body__strategy-box--right-2');
  const cardsBtnStrategy2 = document.querySelector('.course-body__strategy-btn-2');

  const cardsItemStrategy3 = document.querySelector('.course-body__strategy-box--right-3');
  const cardsBtnStrategy3 = document.querySelector('.course-body__strategy-btn-3');

  const cardsItemStrategy4 = document.querySelector('.course-body__strategy-box--right-4');
  const cardsBtnStrategy4 = document.querySelector('.course-body__strategy-btn-4');

  const imgBtnStrategy = document.querySelector('.course-body__img-content-4');

  //risks
  const cardsItemRisks1 = document.querySelector('.course-body__risks-box--left-1');
  const cardsBtnRisks1 = document.querySelector('.course-body__risks-btn-1');

  const cardsItemRisks2 = document.querySelector('.course-body__risks-box--left-2');
  const cardsBtnRisks2 = document.querySelector('.course-body__risks-btn-2');

  const cardsItemRisks3 = document.querySelector('.course-body__risks-box--left-3');
  const cardsBtnRisks3 = document.querySelector('.course-body__risks-btn-3');

  const imgBtnRisks = document.querySelector('.course-body__img-content-5');

  //case
  const cardsItemCase1 = document.querySelector('.course-body__case-box--right-1');
  const cardsBtnCase1 = document.querySelector('.course-body__case-btn-1');

  const cardsItemCase2 = document.querySelector('.course-body__case-box--right-2');
  const cardsBtnCase2 = document.querySelector('.course-body__case-btn-2');

  const cardsItemCase3 = document.querySelector('.course-body__case-box--right-3');
  const cardsBtnCase3 = document.querySelector('.course-body__case-btn-3');

  const imgBtnCase = document.querySelector('.course-body__img-content-6');

  let cardsFunctionHover = (cardsBtn, cardsItem, imgBtn) => {
    cardsBtn.addEventListener('mouseover', function () {
      cardsItem.classList.add('active');
      imgBtn.classList.add('active');
    });
    cardsBtn.addEventListener('mouseout', function () {
      cardsItem.classList.remove('active');
      imgBtn.classList.remove('active');
    });
  };

  if (
    (cardsBtnMarket1,
    cardsBtnMarket2,
    cardsBtnMarket3,
    cardsBtnMarket4,
    cardsItemMarket1,
    cardsItemMarket2,
    cardsItemMarket3,
    cardsItemMarket4,
    imgBtnMarket)
  ) {
    cardsFunctionHover(cardsBtnMarket1, cardsItemMarket1, imgBtnMarket);
    cardsFunctionHover(cardsBtnMarket2, cardsItemMarket2, imgBtnMarket);
    cardsFunctionHover(cardsBtnMarket3, cardsItemMarket3, imgBtnMarket);
    cardsFunctionHover(cardsBtnMarket4, cardsItemMarket4, imgBtnMarket);
  }

  if (
    (cardsBtnBasics1,
    cardsBtnBasics2,
    cardsBtnBasics3,
    cardsBtnBasics4,
    cardsItemBasics1,
    cardsItemBasics2,
    cardsItemBasics3,
    cardsItemBasics4,
    imgBtnBasics)
  ) {
    cardsFunctionHover(cardsBtnBasics1, cardsItemBasics1, imgBtnBasics);
    cardsFunctionHover(cardsBtnBasics2, cardsItemBasics2, imgBtnBasics);
    cardsFunctionHover(cardsBtnBasics3, cardsItemBasics3, imgBtnBasics);
    cardsFunctionHover(cardsBtnBasics4, cardsItemBasics4, imgBtnBasics);
  }

  if (
    (cardsBtnTools1, cardsBtnTools2, cardsBtnTools3, cardsItemTools1, cardsItemTools2, cardsItemTools3, imgBtnTools)
  ) {
    cardsFunctionHover(cardsBtnTools1, cardsItemTools1, imgBtnTools);
    cardsFunctionHover(cardsBtnTools2, cardsItemTools2, imgBtnTools);
    cardsFunctionHover(cardsBtnTools3, cardsItemTools3, imgBtnTools);
  }

  if (
    (cardsBtnStrategy1,
    cardsBtnStrategy2,
    cardsBtnStrategy3,
    cardsBtnStrategy4,
    cardsItemStrategy1,
    cardsItemStrategy2,
    cardsItemStrategy3,
    cardsItemStrategy4,
    imgBtnStrategy)
  ) {
    cardsFunctionHover(cardsBtnStrategy1, cardsItemStrategy1, imgBtnStrategy);
    cardsFunctionHover(cardsBtnStrategy2, cardsItemStrategy2, imgBtnStrategy);
    cardsFunctionHover(cardsBtnStrategy3, cardsItemStrategy3, imgBtnStrategy);
    cardsFunctionHover(cardsBtnStrategy4, cardsItemStrategy4, imgBtnStrategy);
  }

  if (
    (cardsBtnRisks1, cardsBtnRisks2, cardsBtnRisks3, cardsItemRisks1, cardsItemRisks2, cardsItemRisks3, imgBtnRisks)
  ) {
    cardsFunctionHover(cardsBtnRisks1, cardsItemRisks1, imgBtnRisks);
    cardsFunctionHover(cardsBtnRisks2, cardsItemRisks2, imgBtnRisks);
    cardsFunctionHover(cardsBtnRisks3, cardsItemRisks3, imgBtnRisks);
  }

  if ((cardsBtnCase1, cardsBtnCase2, cardsBtnCase3, cardsItemCase1, cardsItemCase2, cardsItemCase3, imgBtnCase)) {
    cardsFunctionHover(cardsBtnCase1, cardsItemCase1, imgBtnCase);
    cardsFunctionHover(cardsBtnCase2, cardsItemCase2, imgBtnCase);
    cardsFunctionHover(cardsBtnCase3, cardsItemCase3, imgBtnCase);
  }
}

if (typeof Nydd === 'undefined') {
  Nydd = {};
}
Nydd.ColumnLayout = {};
(
function () {
  var slots = [];
  var lastRight = null;
  var lastLeft = null;
  var addSlot = function (elm, isLeft) {
    var $elm = $(elm)
    if (isLeft) {
      
    }
  };
  Nydd.ColumnLayout.pushSlot = function (elm) {
    slots[slots.length] = elm;
    if (slots.length === 1) {
      setColumnSide(elm, true);
      return;
    }
    else if (slots.length === 2) {
      setColumnSide(elm, false);
      return;
    }
    if (checkSide()) {
      setColumnSide(elm, true);
    }
    else {
      setColumnSide(elm, false);
    }
  };

  var setColumnSide = function (elm, isLeft) {
    if (isLeft) {
      $(elm)
        .addClass('left-col')
        .data('column', true)
        .removeClass('not-in-column');
      lastLeft = elm;
    }
    else {
      $(elm)
        .addClass('right-col')
        .data('column', false)
        .removeClass('not-in-column');
      lastRight = elm;
    }
  };

  /**
   * compare the bottom y position of lastLeft and lastRight.
   * return true for left
   */
  var checkSide = function () {
    var result = true;
    var $L = $(lastLeft);
    var $R = $(lastRight);
    var bottomL = parseInt($L.offset().top + $L.outerHeight(), 10);
    var bottomR = parseInt($R.offset().top + $R.outerHeight(), 10);
    if (bottomR < bottomL) {
      result = false;
    }
    return result;
  };

  var init = function () {
    $articles = $('#content > .not-in-column');
    $articles.each(
      function (i, elm) {
        Nydd.ColumnLayout.pushSlot(elm);
      }
    );
  };
  $(init);
})();

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create(
    'window.html',
    {
      //'outerBounds': {
      //  'width': 1000,
      //  'height': 1000
      //}
    },
    function(win) {
        win.maximize();
    }
  );
});

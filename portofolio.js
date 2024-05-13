document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      document.title = "Website Portofolio";
    } else {
      document.title = "Dilihat dong!😾";
    }
  });
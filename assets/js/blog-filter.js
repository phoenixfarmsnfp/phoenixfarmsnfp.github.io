(function () {
  "use strict";

  var yearFilter = document.getElementById("blog-year-filter");
  var tagFilter = document.getElementById("blog-tag-filter");
  var clearButton = document.getElementById("blog-filter-clear");
  var status = document.getElementById("blog-filter-status");
  var emptyState = document.getElementById("blog-filter-empty");
  var posts = Array.prototype.slice.call(document.querySelectorAll(".js-blog-post"));

  if (!yearFilter || !tagFilter || !clearButton || !status || !emptyState) {
    return;
  }

  function filterPosts() {
    var selectedYear = yearFilter.value;
    var selectedTag = tagFilter.value.toLowerCase();
    var visibleCount = 0;

    posts.forEach(function (post) {
      var matchesYear = !selectedYear || post.dataset.year === selectedYear;
      var postTags = post.dataset.tags.toLowerCase().split("|");
      var matchesTag = !selectedTag || postTags.indexOf(selectedTag) !== -1;
      var isVisible = matchesYear && matchesTag;

      post.hidden = !isVisible;
      if (isVisible) {
        visibleCount += 1;
      }
    });

    emptyState.hidden = visibleCount !== 0;

    if (!selectedYear && !selectedTag) {
      status.textContent = posts.length + (posts.length === 1 ? " post" : " posts");
      return;
    }

    status.textContent = visibleCount + (visibleCount === 1 ? " matching post" : " matching posts");
  }

  yearFilter.addEventListener("change", filterPosts);
  tagFilter.addEventListener("change", filterPosts);
  clearButton.addEventListener("click", function () {
    yearFilter.value = "";
    tagFilter.value = "";
    filterPosts();
    yearFilter.focus();
  });

  filterPosts();
})();

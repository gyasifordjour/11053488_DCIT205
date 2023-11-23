function toggleContent(itemNumber) {
    var contentId = "content" + itemNumber;
    var content = document.getElementById(contentId);

    // Toggle the display of the hidden content
    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  }
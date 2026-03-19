const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  resultsDiv.innerHTML = "";

  const filtered = articles.filter(article =>
    article.title.toLowerCase().includes(query) ||
    article.content.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    resultsDiv.innerHTML = "<p>No results found</p>";
    return;
  }

  filtered.forEach(article => {
    const div = document.createElement("div");
    div.classList.add("result");
    div.innerHTML = `<h3>${article.title}</h3><p>${article.content}</p>`;
    resultsDiv.appendChild(div);
  });
});

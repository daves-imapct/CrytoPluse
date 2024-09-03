const apiKey = '2b22343ff37b17981dee571fc899d0d83852be1764967300bf1f1a152dfc3b7b';
const url1 = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${apiKey}`;

fetch(url1)
  .then(response => response.json())
  .then(data => {
    // Display the news articles
    data.Data.forEach(article => {
      console.log(article);
      let shortDescription = article.body.length > 100 ? article.body.substring(0, 200) + '...' : article.body;

      document.querySelector(".news").innerHTML +=
        '<div class="news-container">' +
          '<div class="new">' +
            `<img src="${article.imageurl}" class="news-cover">` +
            '<div class="part2">' +
              `<p class="news-title">${article.title}</p>` +
              `<div class="news-detail-container"><p class="news-detail">${shortDescription}</p></div>` +
              `<button class="read-more" onclick="window.open('${article.url}', '_blank')">Read more</button>` +
              `<p class="source">${article.source}</p>`+
            '</div>' +
          '</div>' +
        '</div>';
    });
  })
  .catch(error => console.error('Error fetching news:', error));


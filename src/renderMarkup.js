
export function  renderMarkupImageInfo ({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads
}) {
    return `

<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads: ${downloads}</b>
    </p>
  </div>
</div>
`;
}







// <div class="country-info__card">
// <h2 class="country-info__name">${name.common}</h2>
// <img src="${flags.svg}" class="country-info__flag" width="220px" height="140px">
// <ul class="country-info-features">
//   <li class="country-info__feature">
//     <h3>Capital:&nbsp;</h3>
//     <p>${capital}</p>
//   </li>
//   <li class="country-info__feature">
//     <h3>Population:&nbsp;</h3>
//     <p>${population}</p>
//   </li>
//   <li class="country-info__feature">
//     <h3>Languages:&nbsp;</h3>
//     <p>${Object.values(languages)}</p>
//   </li>
// </ul>
// </div>

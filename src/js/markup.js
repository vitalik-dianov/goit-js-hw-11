export function markup(data) {
  return `
  <div class="photo-card">
    <a class="gallery-link" href="${data.largeImageURL}" >
        <img class="card-img" src="${data.webformatURL}" alt="${data.tags}" loading="lazy" />
        </a>
        <div class="info">
            <p class="info-item">
                <b>Likes: </b> ${data.likes}
            </p>
            <p class="info-item">
                <b>Views: </b> ${data.views}
            </p>
            <p class="info-item">
                <b>Comments:</b>  ${data.comments}
            </p>
            <p class="info-item">
                <b>Downloads: </b> ${data.downloads}
            </p>
</div>
</div>`;
}

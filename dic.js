document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    // Fetch JSON data
    fetch('dic.json')
        .then(response => response.json())
        .then(data => {
            const photos = data.photos;
            displayPhotos(photos);
        })
        .catch(error => console.error('Error fetching photos:', error));

    // Function to display all photos
    function displayPhotos(photos) {
        photos.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.classList.add('photo-item');

            const imgElement = document.createElement('img');
            imgElement.src = photo.imagePath;
            imgElement.alt = photo.caption;

            const captionElement = document.createElement('div');
            captionElement.classList.add('caption');
            captionElement.innerText = photo.caption;

            photoItem.appendChild(imgElement);
            photoItem.appendChild(captionElement);
            gallery.appendChild(photoItem);
        });
    }
});

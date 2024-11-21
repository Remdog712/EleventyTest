document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("image-gallery");

    if (!gallery) {
        console.error('Gallery element not found');
        return;
    }

    fetch('image_metadata.json')
    .then(response => {
        console.log('Fetch Response:', response);
        if (!response.ok) {
            throw new Error('Failed to fetch image metadata');
        }
        return response.json();
    })
    .then(images => {
        console.log('Images data:', images);
        images.forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = `/images/${image.filename}`;
            imgElement.alt = image.filename;
            imgElement.className = "gallery-image";
            gallery.appendChild(imgElement);
        });
    })
    .catch(error => console.error('Error loading images:', error));

});

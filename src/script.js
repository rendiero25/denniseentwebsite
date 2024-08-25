function adjustHeight() {
    const container = document.getElementById('#container');
    container.style.height = window.innerHeight + 'px';
}

window.addEventListener('resize', adjustHeight);
window.addEventListener('load', adjustHeight);

const gallery = document.getElementById('gallery');
const categorySelect = document.getElementById('categorySelect');

        // Data foto (ganti dengan data foto Anda)
        const photos = [
            { src: '/images/ci1.png', alt: 'Foto ci', category: 'christmasidol' },
            { src: '/images/ci2.png', alt: 'Foto ci', category: 'christmasidol' },
            { src: '/images/ci3.png', alt: 'Foto ci', category: 'christmasidol' },
            { src: '/images/ci4.png', alt: 'Foto ci', category: 'christmasidol' },
            { src: '/images/ci5.png', alt: 'Foto ci', category: 'christmasidol' },
            { src: '/images/anc1.png', alt: 'Foto anc', category: 'alvinchipmunks' },
            { src: '/images/anc2.png', alt: 'Foto anc', category: 'alvinchipmunks' },
            { src: '/images/anc3.png', alt: 'Foto anc', category: 'alvinchipmunks' },
            { src: '/images/anc4.png', alt: 'Foto anc', category: 'alvinchipmunks' },
            { src: '/images/dc1.png', alt: 'Foto dj', category: 'djcompetition' },
            { src: '/images/dc2.png', alt: 'Foto dj', category: 'djcompetition' },
            { src: '/images/dc3.png', alt: 'Foto dj', category: 'djcompetition' },
            { src: '/images/dc4.png', alt: 'Foto dj', category: 'djcompetition' },
            { src: '/images/dc5.png', alt: 'Foto dj', category: 'djcompetition' },
            { src: '/images/hd1.png', alt: 'Foto hd', category: 'harley' },
            { src: '/images/hd2.png', alt: 'Foto hd', category: 'harley' },
            { src: '/images/hd3.png', alt: 'Foto hd', category: 'harley' },
            { src: '/images/hd4.png', alt: 'Foto hd', category: 'harley' },
            { src: '/images/hd5.png', alt: 'Foto hd', category: 'harley' },
            { src: '/images/m1.png', alt: 'Foto m', category: 'mewarnai' },
            { src: '/images/m2.png', alt: 'Foto m', category: 'mewarnai' },
            { src: '/images/m3.png', alt: 'Foto m', category: 'mewarnai' },
            { src: '/images/m4.png', alt: 'Foto m', category: 'mewarnai' },
            { src: '/images/m5.png', alt: 'Foto m', category: 'mewarnai' },
            // Tambahkan data foto lainnya
        ];

        // Fungsi untuk menampilkan foto di galeri
        function displayPhotos(category) {
            gallery.innerHTML = ''; // Bersihkan galeri sebelum menampilkan foto baru

            photos.forEach(photo => {
                if (category === '' || photo.category === category) {
                    const photoElement = document.createElement('div');
                    photoElement.classList.add('cursor-pointer');
                    photoElement.innerHTML = `
                        <img src="${photo.src}" alt="${photo.alt}" class="w-full rounded-lg">
                    `;
                    gallery.appendChild(photoElement);
                }
            });
        }

        // Event listener untuk dropdown kategori
        categorySelect.addEventListener('change', () => {
            const selectedCategory = categorySelect.value;
            displayPhotos(selectedCategory);
        });

        // Panggil fungsi untuk menampilkan semua foto saat halaman dimuat
        displayPhotos('');
var favicon_images = [
    'Ressources/favicon/frame_00_delay-0.08s.png',
    'Ressources/favicon/frame_01_delay-0.08s.png',
    'Ressources/favicon/frame_02_delay-0.08s.png',
    'Ressources/favicon/frame_03_delay-0.08s.png',
    'Ressources/favicon/frame_04_delay-0.08s.png',
    'Ressources/favicon/frame_05_delay-0.08s.png',
    'Ressources/favicon/frame_06_delay-0.08s.png',
    'Ressources/favicon/frame_07_delay-0.08s.png',
    'Ressources/favicon/frame_08_delay-0.08s.png',
    'Ressources/favicon/frame_09_delay-0.08s.png',
    'Ressources/favicon/frame_10_delay-0.08s.png',
    'Ressources/favicon/frame_11_delay-0.08s.png',
    'Ressources/favicon/frame_12_delay-0.08s.png',
    'Ressources/favicon/frame_13_delay-0.08s.png',
    'Ressources/favicon/frame_14_delay-0.08s.png',
    'Ressources/favicon/frame_15_delay-0.08s.png',
    'Ressources/favicon/frame_16_delay-0.08s.png',
    'Ressources/favicon/frame_17_delay-0.08s.png',
    'Ressources/favicon/frame_18_delay-0.08s.png',
    'Ressources/favicon/frame_19_delay-0.08s.png',
    'Ressources/favicon/frame_20_delay-0.08s.png',
    'Ressources/favicon/frame_21_delay-0.08s.png',
    'Ressources/favicon/frame_22_delay-0.08s.png',
    'Ressources/favicon/frame_23_delay-0.08s.png',
    'Ressources/favicon/frame_24_delay-0.08s.png',
],
image_counter = 0; // To keep track of the current image

setInterval(function() {
// remove current favicon
if(document.querySelector("link[rel='icon']") !== null)
document.querySelector("link[rel='icon']").remove();
if(document.querySelector("link[rel='shortcut icon']") !== null)
document.querySelector("link[rel='shortcut icon']").remove();

// add new favicon image
document.querySelector("head").insertAdjacentHTML('beforeend', '<link rel="icon" href="' + favicon_images[image_counter] + '" type="image/gif">');

// If last image then goto first image
// Else go to next image    
if(image_counter == favicon_images.length -1)
image_counter = 0;
else
image_counter++;
}, 40);
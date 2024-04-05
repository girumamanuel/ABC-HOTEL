var Images = [];
var index = 0;

Images[0] = 'Images/image1.jpg';
Images[1] = 'Images/image2.jpg';
Images[2] = 'Images/image3.jpg';
Images[3] = 'Images/image4.jpg';
Images[4] = 'Images/image5.jpg';
Images[5] = 'Images/image6.jpg';
Images[6] = 'Images/image7.jpg';
Images[7] = 'Images/image8.jpg';
Images[8] = 'Images/image9.jpg';

function slideshow () {
    if(index <Images.length){
        document.imageshow.src=Images[index];
        index++
    }
    else {
        index= 0;
    }

    setTimeout("slideshow ()", 2000);


}

window.onload=slideshow;
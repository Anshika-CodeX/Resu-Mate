

// form repeater
$(document).ready(function(){
    $('.repeater').repeater({
        initEmpty: false,
        defaultValues: {
            'text-input': ''
        },
        show:function(){
            $(this).slideDown();
        },
        hide: function(deleteElement){
            $(this).slideUp(deleteElement);
            setTimeout(() => {
                generateCV();
            }, 500);
        },
        isFirstItemUndeletable: true
    })
})



    document.addEventListener('DOMContentLoaded', function() {
        const colorPicker = document.getElementById('cv-color');
        const previewLeft = document.querySelector('.preview-cnt-l');
        const previewRight = document.querySelector('.preview-cnt-r');

        colorPicker.addEventListener('input', function(e) {
            const color = e.target.value;
            previewLeft.style.backgroundColor = color;
            previewRight.style.borderColor = color;

            // Update text color for better contrast
            const rgb = parseInt(color.substring(1), 16);
            const brightness = (
                ((rgb >> 16) & 0xff) * 0.299 +
                ((rgb >> 8) & 0xff) * 0.587 +
                (rgb & 0xff) * 0.114
            ) / 255;

            if (brightness > 0.5) {
                previewLeft.style.color = '#000000';
            } else {
                previewLeft.style.color = '#ffffff';
            }

            // Update other color-dependent elements
            const titles = document.querySelectorAll('.preview-blk-title h3');
            titles.forEach(title => {
                title.style.borderBottomColor = color;
            });
        });
    });

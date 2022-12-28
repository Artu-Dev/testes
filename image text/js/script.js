const imgbtn = document.getElementById('inputimg');
const bg = document.getElementById('bgtext')

imgbtn.addEventListener('input', (evt) => {
    if (!(evt.target && evt.target.files && evt.target.files.length > 0)) {
        return;
    }
    var r = new FileReader();
    r.onload = function() {
        bg.style.backgroundImage = `URL(${r.result})`
    }
    r.readAsDataURL(evt.target.files[0]);
});

const LineH = document.getElementById('ilineH');
const lineOutput = document.getElementById('lineHout');
const text = document.querySelector('.lorem');

LineH.addEventListener('input', () => {
    lineOutput.innerHTML = LineH.value;
    text.style.lineHeight = `${LineH.value}em`
});
let root = document.querySelector(':root');

let subjectSelect = document.getElementById('subjectSelect');
let verbSelect = document.getElementById('verbSelect');
let sentenceP = document.getElementById('sentence');
let img = document.getElementById('showImg');

const resetFunc = () => {
    sentenceP.innerHTML = '';
    img.style.opacity = 0;
    root.style.setProperty('--show','0');
}

const imgFunc = (event) => {
    let subjectSel = parseInt(subjectSelect.value);
    if (subjectSel === -1) { resetFunc(); return; }
    let verbIndex = parseInt(verbSelect.value);
    if (verbIndex === -1) { resetFunc(); return; }

    let verbSel = verbSelect.options[verbIndex+1].text;
    sentenceP.innerHTML = sentence(subjectSel, verbSel);
    img.style.opacity = 1;
    root.style.setProperty('--show','1');
    img.src = `./pics/${+(subjectSel===3||subjectSel===5)}${verbIndex}.JPG`
}

subjectSelect.onchange = imgFunc;
verbSelect.onchange = imgFunc;
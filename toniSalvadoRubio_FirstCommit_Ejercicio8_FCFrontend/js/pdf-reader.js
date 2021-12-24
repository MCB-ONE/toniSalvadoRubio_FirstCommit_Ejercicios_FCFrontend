document.querySelector('#cv-upload').addEventListener('change', ()=>{
    let file = document.querySelector('#cv-upload').files[0];
    let fileUrl = URL.createObjectURL(file);
    let pdfReader = document.querySelector('#pdfreader');
    pdfReader.setAttribute('data', fileUrl)
    console.log(document.querySelector('#cv-upload').files.length)
})
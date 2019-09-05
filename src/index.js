import Header from './components/header';

const doc_data = [
    { url: './docs/2019-0905' }
]

const App = document.getElementById('app');
let html = '';
html += Header;
console.log(doc_data[0].url);

fetch(doc_data[0].url).then((res) => {
    if(res.status == '404'){
        return console.log('server load error')
    }
    res.text()
        .then((text) => {
            // html += text;    
            console.log(text);
            App.innerHTML = text;        
        })
})


console.log('index.js');
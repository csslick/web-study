import Header from './components/header';
import $ from 'jquery';
import docs from './docs';  // 문서

const App = document.getElementById('app');
let html = '';

// html += Header;
// // 문서 추가
// for (var i in docs){
//     html += docs[i];
// }
// console.log(docs);

// $.ajax({
//   url: './src/test.json',
//   success: function(data){
//     console.log('jquery load = ' + data);
//   },
//   error: function(){
//     console.log('error')
//   }
// })

const url = [
    "https://csslick.github.io/web-study-docs/docs/2019-0910.html",
    "https://csslick.github.io/web-study-docs/docs/2019-0909.html",
    "https://csslick.github.io/web-study-docs/docs/2019-0906.html",
]

const insertContents = function(_url){
    return fetch(_url)
            .then(res => res.text())
            .then(data => {
                console.log(data)
                html += data;
                App.innerHTML = html;  
            })
}

html += Header;
for (let i in url){
    insertContents(url[i]);
}








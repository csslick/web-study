import Header from './components/header';
import $ from 'jquery';
import docs from './docs';  // 문서

const App = document.getElementById('app');
let html = '';

html += Header;
// 문서 추가
for (var i in docs){
    html += docs[i];
}
console.log(docs);

// $.ajax({
//   url: './src/test.json',
//   success: function(data){
//     console.log('jquery load = ' + data);
//   },
//   error: function(){
//     console.log('error')
//   }
// })
fetch('./test.json')
    .then(res => res.text())
    .then(data => console.log(data))


App.innerHTML = html;  



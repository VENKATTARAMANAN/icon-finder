var row=document.querySelector(".row");
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer 	kK6tgDjLHCSmHl2xwL56OF53fInl2xxECHnxX0TW2JIPVs3m1k55XXrAelF5sxeY'
  }
};
function getdata(){
  data();
}
  async function data(){
    try{
 var input=document.getElementById('form').value;
    var res=await fetch(`https://api.iconfinder.com/v4/icons/search?query=${input}&count=10`, options);
var res1=await res.json();
var res2=res1;
for(i=0;i<res2.icons.length-1;i++){
row.innerHTML =`
<div class="col-md-4">
      <div class="icon"><img src="${res2.icons[i].raster_sizes[i].formats[0].preview_url}"></div>          
</div>
`
}
}
catch (error) {
        console.log("error");
      }
    }
    data();

   
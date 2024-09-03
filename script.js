var p1 = 0;
const load = document.querySelector(".load");
var url ='https://api.coinlore.net/api/tickers/?start='+p1+'&limit=25';
function getCryto(){
fetch(url)
  .then(response => response.json())
  .then(dt => {
    console.log(dt);
    for(var i = 0; i <=dt.data.length; i++){
        var names = dt.data[i].name;
        var symbol = dt.data[i].symbol;
        var price = dt.data[i].price_usd;
        var change = dt.data[i].percent_change_24h;
        var marketCap = dt.data[i].market_cap_usd;

        var changeColor;
        var up,down;
        up = '<i class="fa fa-caret-up" aria-hidden= "true"> </i>'
        down = '<i class="fa fa-caret-up" aria-hidden="true" style = transform:rotate(180deg)></i>'
        if(change<0){
            changeColor="red";
            change= down+change;
        }
        else if(change>0){
            changeColor="green";
            change= up+change
        }
        else{
            changeColor="white"
        }
        document.querySelector(".coin-box2").innerHTML+=
        '<div class="coin-lines">'+ 
        '<div class="coin-details">'+
                      '<img src="https://www.coinlore.com/img/25x25/'+dt.data[i].nameid+'.png" class="coin-img"><p class="coin">'+names+'<span>'+symbol+'</span></p>'+
                      '<p class="price">'+"$"+price+'</p>'+
                      '<span style = color:'+changeColor+'>'+
                      '<p class="changes">'+change+"%"+'</p>'+
                      '</span>'+
                      '<p class="market">'+"$"+marketCap+'</p>'+
                  '</div>'+
                  '</div>';
        }
  })
}
getCryto();


// setInterval(getCrypto(), 200);

  load.addEventListener("click",()=>{
    p1+=25;
    url ='https://api.coinlore.net/api/tickers/?start='+p1+'&limit=25';
    getCryto(); 
  })
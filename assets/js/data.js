const http = new XMLHttpRequest();
const url = 'https://api.bilibili.com/x/space/channel/index?mid=385332728'
http.open("GET", url);
http.send();
http.onreadystatechange=(e)=> {
	console.log(http.responseText)
}

function Onload_check_forum_thread() {
	if(localStorage.getItem("Name") == null)
		document.getElementById("queryInfo").style.display = "none";
	else
		document.getElementById("queryInfo").style.display = "block";
}

var getQueryString=function(field,url){
	var href=url ? url:window.location.href;
	var reg=new RegExp("[?&]"+field+ "=([^&#]*)","i");
	var string=reg.exec(href);
	return string ? string[1]:null;
}
var queryData=[getQueryString("type"),getQueryString("name")];

$(document).ready(function(){
	$("title").text(queryData[1]+" forum");
	$("#queryInfo").click(function(){
		window.location.href = "post.html?type="+queryData[0]+"&name="+queryData[1];
	})
	$(".item").click(function(){
		$(this).children("ul").toggle(200);
		//$(this).parents(".main_menu").siblings().children(".item").children("ul").css();
		$(this).siblings(".item").children("ul").hide();
	})

		//


	//loading data
	//var currentIndex=1;
	var maxLoad=20;
	initialize();
	function initialize(){
		LoadData(function(result){
			var list=result.split("&");
			insertData(list);
			insertButton(list.length);
		});
		
	}
	//base on length of array and how many we want per button to calculate number of button
	//there is decimal part then increase 1
	function insertButton(totalList){
		//base on number of total thread to determine button
		var totalBut=0;
		//truncate to int type
		totalBut=parseInt(totalList/maxLoad);
		//check decimal part add 1 more button
		if(totalList%maxLoad!=0){
			totalBut++;
		}
		//insert button into html
		for(var i=1;i<=totalBut;i++){
			var newBut="<li class=\"dataBut\">"+i+"</li>";
			$("#dataButContiner").append(newBut);
		}
	}
	var typeOfState={normal:1,search:2,sort:3,};
	var state=typeOfState.normal;
	//because use search and normal use same function need to check


	$(document).on("click",".dataBut",function(){
		var dataButList=$(".dataBut");
			//get index number on list base on button
		
			var currentIndex=dataButList.index(this);
			currentIndex++;
			 //normal state
			if(state==typeOfState.normal){
				LoadData(function(result){
					var list=result.split("&");
					insertData(list,currentIndex);

				});

			}
			else if(state==typeOfState.search){
				
				
				LoadData(function(result){
					
					search(currentIndex);

				});

			}
			

			
		//}
		
	});
	$("#search").click(function(){search()});

		
	//get value from box ,load data from txt,check wether data match value,if match insert to new array
	function search(buttonIndex=1){
		state=typeOfState.search;
		LoadData(function(result){
			var list=result.split("&");
			var value=$("#searchData").val();
			var newList=[];
			for(var i=0;i<list.length;i++){
				var dataList=list[i].split("|");
				//check wether array contain certain string ,return -1 if not found
				if(dataList[0].indexOf(value)!=-1){
					newList.push(list[i]);
				}

			}
			if(newList.length!=0){
				//base on new array list  to sent data and button index to insert function,empty the button list and create new button list

				insertData(newList,buttonIndex);
				$("#dataButContiner").empty();
				insertButton(newList.length);
			}
			else{
				//no data found just display empty and clear button
				$("#threadList").append("<h1 style=\"color:white;font-size:30px;margin-left:auto;margin-right:auto;\">No result founded</h1>");
				$("#dataButContiner").empty();

			}
			
		});
		//currentIndex=1;
		

	}

	//delete all content and return the data once successful load
	function LoadData(callback){		
		$("#threadList").empty();
		
		return jQuery.ajax({
			url:"data/"+queryData[0]+"/"+queryData[1]+".txt",
			dataType:"text",
			success: callback//function(data){
				//var list=data.split("&");
				
			//}
		});
	}

	//use insert data to page from arraylist base on button press	
	function insertData(list,buttonIndex=1){
		//the list is ?,?,|
		var lastIndex=buttonIndex*maxLoad;
		
		for(var i=lastIndex-maxLoad;i<lastIndex;i++){
			//check list last element if i larger than last element just terminate the loop
			if(i>list.length-1){
				break;
			}

			var splitData=list[i].split("|");
			var newRow="<tr><td class=\"name\"><a href=\"threadpage.html?id="+splitData[0]+"\">"+splitData[0]+"</a></td><td class=\"by\">"+splitData[1]+"</td><td class=\"date\">"+splitData[2]+"</td></tr>";

			$("#threadList").append(newRow);
			

		}

	}


	/*
	loading from back,for illustion only
	int currentIndex=2;
		int maxLoad=20;
		int lastIndex=currentIndex*maxLoad;
		for(int i=lastIndex-1;i>=lastIndex-maxLoad;i--){
			System.out.println(i+" "+(lastIndex-maxLoad));
		}*/


	/*jQuery.ajax({
		url:"data/"+queryData[0]+"/"+queryData[1]+".txt",
		dataType:"text",
		success:function(data){
			var list=data.split("&");
			for(var i=0;i<list.length;i++){
				var splitData=list[i].split("|");
				var newRow="<tr><td class=\"name\"><a href=\"threadpage.html?id="+splitData[0]+"\">"+splitData[0]+"</a></td><td class=\"by\">"+splitData[1]+"</td><td class=\"date\">"+splitData[2]+"</td></tr>";

				$("#threadList").append(newRow);
			}
		}
	});*/

});
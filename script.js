	var a = 5883589;
	a = a.toString(10);
function first1()
{	
	var count = 0;
	for (var i = 0; i < a.length; i++)
	{
		if (a[i]%2!=0)
			count++;
	}
	document.getElementById("rez2").value = count;
}

function first2()
{
	var counter=0;
	var A = document.getElementById('vvod').value;
	for (var i = 0; i < a.length; i++) 
	{
		if (a[i]==A)
		counter++;
	}
	if (counter > 2 ) 
	{
		document.getElementById("otvet").value = "Встречается больше двух раз ("+counter+" раз(а) )";
	}
	else
	{
		document.getElementById('otvet').value = "Встречается два или менее раз ("+counter+" раз(а) )";
	}	
}

function vtoroe()
{	
	var countt;
	var temp;
	var N = document.getElementById("N").value;
	//let b = document.getElementById("otvet2").value=' ';
	for (var i = 1; i<=200; i++)
	{	
		temp=0;
		countt = 0; 
		for (var j = 1; j<=200; j++)
		{
			if (i%j == 0 )
			{
				countt++;
				
			} 
		}
		if (countt == N)
			{	
				temp=i;
				document.getElementById('otvet2').value = document.getElementById('otvet2').value + temp + ', ';
				//document.getElementById('otvet2').value=temp+', ';
			}
	
	}
}

function chetvertoe()
{
	var inputmas=document.getElementById('mas9')
	,n = 9 			//chislo elementov
	,max = 2 		// max. chislo perezaprosov
	,att 			//schetchik popitok
	,i 				//index
	,greet=' ' 	
	,arr = [];  	//sozdanie massiva
	for(i=0;i<n;i++)
	{
		for(att=0; att<max;)
		{
			greet ='введите элемент '+(i+1);
			if (att++>0) greet += '(попытка '+att+' из '+max+')';
			arr[i]=prompt(greet); //zapolnenie
			if(null!==arr[i] && arr[i].length) break;
			if(att===max)
			{
			alert("отмена");
			return false;
			}
		}
	}
	document.getElementById('masvivod').value = arr;

	//положительные и отриц элементы
	var AA, pos = 0, neg = 0;
	for (i=0; i<arr.length;i++)
	{
	if (arr[i]>0) 
		pos++;
	else if (arr[i]<0)
		neg++;
	}
	document.getElementById('positive').value = pos;
	document.getElementById('negative').value = neg;
	//произведение нечет эл-ов кратных 3
	var sum=1;
	 for (var i=0; i<arr.length;i++) 
	 {
		if (i%2!=0 & arr[i]%3==0)
			{
			sum = sum * arr[i];
			}
	}
	document.getElementById('kratnost').value = sum;

	//замена максимума на минимум и наоборот
let masmax = new Array(); //max
let masmin = new Array(); //min
var minim=0;
var maxim=0;
		for (i=0;i<arr.length;i++) 
		{
		if (arr[i]<minim)
		{masmin.push(arr[i]);}
		else if (arr[i]>=maxim)
		{masmax.push(arr[i]);}
}
var newArray=masmin.concat(masmax);
document.getElementById('zamena1').value = newArray;
//добавление рандом числа от -5 включительно до 5 
	var ran=5;
	var ran2=-5;
	newArray.unshift(Math.floor(Math.random()*(ran-ran2)+ran2));
	document.getElementById('dobavlenie1').value = newArray;
//удаление чисел которые больше 10 по модулю
	let x=10;
	let gg=Math.abs(x);
	var newArray1=new Array();
	for(i=0;i<newArray.length;i++)
	{
		if (Math.abs(newArray[i])<gg)
		{
			newArray1.push(newArray[i]);
			//newArray.splice(i, 1);
		}
		else if (Math.abs(newArray[i])>gg)
		{
			delete newArray[i];
		}
	}
	document.getElementById('modul').value=newArray1;
}
function pyatoe() 
{
    let tableBody = document.querySelector('.mytable tbody');
    [...tableBody.children].forEach(children => children.remove());
 var ma=10;
var mi=-10;
var dvmas = [
[Math.floor(Math.random()*(ma-mi)+mi), Math.floor(Math.random()*(ma-mi)+mi), Math.floor(Math.random()*(ma-mi)+mi), Math.floor(Math.random()*(ma-mi)+mi)],
[Math.floor(Math.random()*(ma-mi)+mi), Math.floor(Math.random()*(ma-mi)+mi), Math.floor(Math.random()*(ma-mi)+mi), Math.floor(Math.random()*(ma-mi)+mi)],
[Math.floor(Math.random()*(ma-mi)+mi), Math.floor(Math.random()*(ma-mi)+mi), Math.floor(Math.random()*(ma-mi)+mi), Math.floor(Math.random()*(ma-mi)+mi)],
[Math.floor(Math.random()*(ma-mi)+mi), Math.floor(Math.random()*(ma-mi)+mi), Math.floor(Math.random()*(ma-mi)+mi), Math.floor(Math.random()*(ma-mi)+mi)]
];
for (let i = 0; i < dvmas.length; i++) 
    {   
  let tr = document.createElement("TR")
  tableBody.appendChild(tr); 
            {
    for (let j = 0; j < dvmas[i].length; j++) 
    {
      let td = document.createElement("TD")
      td.innerHTML = dvmas[i][j];
      tr.appendChild(td)
    }
            }
    }
   // console.log(dvmas)
   var sh, re, re2,re3;
   for (let i = 0; i<dvmas.length; i++) 
   {
   	for(let j = 0; j<dvmas.length; j++)
   	{
   	if(dvmas[i][j]<0 && dvmas[i][j]%5==0)
   			{
   				re = true;
   			}	
   	}
   }	
   if (re==true)
   {
   		document.getElementById('stolb').value='Существует';
   }
   if (re!=true)
   {
   	document.getElementById('stolb').value='Не существует';
   }
 
}

function shestoe()
 {var pisi=0, pisi2=0;
	let string=document.getElementById("stroka1").value;
	//var dsmas= ds.split(' ');	
	let count = {} 
	for (let i = 0; i < string.length; i++)
{
  	if (count[string[i]]) { count[string[i]]++; } 

	else { count[string[i]] = 1; }
	
}
console.log(count)
	for (let x in count)
{
	if (count[x]>1) 
		{pisi++; }
	else if (count[x]==1)
		{pisi2++}
}
console.log(' Не повторяются '+pisi2)
document.getElementById('nepovt').value = pisi2;
}
function last()
{
	var ah;
	var popped, shifted;
	var pushed, unshifted;
	var mas2=[];
	var dsmas1=[];
	let string=document.getElementById("stroka1").value;
	var dsmas= string.split(' ');
	for(let u=0; u<dsmas.length;u++)
	{

		if (dsmas[u].length>=3)
			{
				mas2[u] = dsmas[u].split('');
				popped=mas2[u].pop();		//извлекли из конца
				shifted=mas2[u].shift(); //извлекли из начала
				mas2[u].push(shifted); //добавление в конец
				mas2[u].unshift(popped);	//добавление в начало
				dsmas1[u]=mas2[u].join('');
			}
			else if (dsmas[u].length<=2)
				{ah = dsmas[u];
				dsmas1[u]=ah;}
		mas2=[];
		popped = '';
		shifted ='';
		unshift='';
		pushed='';
		ah = '';
	}	
	dsmas1=dsmas1.join(' ');
	document.getElementById('preo').value=dsmas1;
	
}
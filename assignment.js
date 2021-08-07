 1 // write a function to get the sum of n natural number.
       function getNaturalSum(n)
       {
           var sum=0;
            for(let i=1;i<=n;i++)
            {
                sum=sum+i;
            }
            return sum;
       }
       console.log(getNaturalSum(5));
	   
	   
	   
 2 // write a function it check if the number is even or not by using only if else statement.
     function isEven(num)
     {
       return num%2? 'odd':'even';
     }
     console.log(isEven(6));	   
	   
	   
	   
	   
3	 // write a function it check if the number is prime or not.
        function isPrime(num)
        {
            let isPrimeNumber= num + ' is a prime';
            for(let i=2;i<=num;i++)
            {
                if(num%i===0)
                {
                    isPrimeNumber= num + ' is not a prime';
                    break;
                }
            }
          return isPrimeNumber;
        }
        console.log(isPrime(11));
		
		
		
4 //write a function 'weekday' that take n as the input and return the day associated to it if n<1 or n>7 then return invalid input. switch case only.
    function weekday(num)
    {
        let weekRes= '';
        switch(num)
        {
            case 1:weekRes ="Sunday";
            break;
            case 2:weekRes ="Monday";
            break;
            case 3:weekRes ="Tuseday";
            break;
            case 4:weekRes ="Wednesday";
            break;
            case 5:weekRes ="Thursday";
            break;
            case 6:weekRes ="Friday";
            break;
            case 7:weekRes ="Saturday";
            break;
            default: weekRes="Invalid Input";
        }
        return weekRes;
    }
    console.log(weekday(6));



5 //write a function 'weekday' that take n as the input and return the day associated to it if n<1 or n>7 then return invalid input. if else only.
    function weekday(num)
    {
        let weekRes= '';
        if(num===1)
        {
            weekRes= 'Sunday';
        }
        else if(num===2)
        {
            weekRes= "Monday";
        } 
        else if(num===3)
        {
            weekRes= "Tuseday";
        } 
        else if(num===4)
        {
            weekRes= "Wednesday";
        }
        else if(num===5)
        {
            weekRes= "Thursday";
        }
        else if(num===6)
        {
            weekRes= "Friday";
        } 
        else if(num===7)
        {
            weekRes= "Saturday";
        } 
        else(
            weekRes ='Invalid Input'
        )   
        return weekRes;
    }
    console.log(weekday(5));
	
	
	
6	 //write a function 'weekday' that take n as the input and return the day associated to it if n<1 or n>7 then return invalid input. using ternary operator only.
    function weekday(num)
    {
        let weekRes= num===1 ? 'Sunday' : num===2 ? 'Monday' : num===3 ? 'Tuseday' : num===4 ? 'Wednesday' : num===5 ? 'Thuresday' : num===6 ? 'Friday' : num===7 ? 'Saturday' : 'Invalid Input' ;
        return weekRes;
    }
    console.log(weekday(8));

	
	
7 // WAF to search an element in the array ?.
   function arraySearch(arr, num)
   {
        let res='not present';
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]===num)
            {
                res='Present'
                break;
            }
        }
        return res;
   }
   console.log(arraySearch([1,2,3,4],7));	
   
   
   
   
8  // WAF to find max element in the array ?.
   function arrayMax(arr)
   {
        let maxNum=0;
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]>maxNum)
            {
                maxNum=arr[i];
            }
        }
        return maxNum;
   }
   console.log(arrayMax([1,2,3,4]));


9   // WAF to find min element in the array ?.
   function arrayMin(arr)
   {
        let minNum=arr[0];
        for(let i=0;i<arr.length;i++)
        {
            if(arr[i]<minNum)
            {
                minNum=arr[i];
            }
        }
        return minNum;
   }
   console.log(arrayMin([6,2,3,4]));  


10 //WAF to find the factorial of any Number.
    function getFactorial(num)
	{
			let fact=num;
			while(num> 1)
			{
				fact *=num-1;
				num--;
			}
			return fact;
	}
   console.log(getFactorial(5));
   

11  // WAF to reverse an array ?.
   function arrayRev(arr)
   {
        let revArr=[];
        for(let i=arr.length-1;i>=0;i--)
        {
            revArr.push(arr[i]);
        }
        return revArr;
   }
   console.log(arrayRev([6,2,3,4]));


12  // WAF to reverse an String ?.
   function stringRev(str)
   {
        let revStr='';
        for(let i=str.length-1;i>=0;i--)
        {
            revStr +=str[i];
        }
        return revStr;
   }
   console.log(stringRev('rahul'));   
   
   
   
13    // WAF to remove duplicate chars from String ?.
   function removeDuplicate(str)
   {
        let res='';
        for(let i=0 ;i<str.length;i++)
        {
            if(!res.includes(str[i]))
            {
                res += str[i];
            }
        }
        return res;
   }
   console.log(removeDuplicate('rama'));   
   
   
   
 15   // WAF to check if the String is a palindrome or not ?.
   function isPalindrome(str)
   {
        let revStr='';
        for(let i=str.length-1;i>=0;i--)
        {
            revStr +=str[i];
        }
        if(str===revStr)
        {
            return 'Palindrome';
        }
        else{
            return 'Not Palinrrome';
        }
       
   }
   console.log(isPalindrome('aba')); 
   
   
   
16  // WAF to count the number of words in the string?.
   function countString(str)
   {
      let count=0;
      if(str)
      {
          count++;
          while(str)
          {
              str=str.slice(0,3)+str.slice(4);
              str=str.substring(1);
              count++;

          }
      }
      return count
   }
   console.log(countString('rahul'));
   
   
   
   
17  // WAF to print the number of days in the month using swith case?.
   function getDayInMonth(month)
   {
      switch(month)
      {
          case 'jan' :return 31;
          case 'feb' :return 28;
          case 'mar' :return 31;
          case 'apr' :return 30;
          case 'may' :return 31;
          case 'jun' :return 30;
          case 'jul' :return 31;
          case 'aug' :return 31;
          case 'sep' :return 30;
          case 'oct' :return 31;
          case 'nov' :return 30;
          case 'dec' :return 31;
          default: return 'Invalid'
      }
   }
   console.log(getDayInMonth('feb'));
   
   
   
18  // WAF to check if the number is 0 , -ve, +ve using switch case.
    function checkNumberSign(num)
    {
        switch(num)
        {
            case 1 : return 'Positive';
            case -1: return 'Negative';
            case 0 : return 'Zero';
        }
    }



19   // WAF to check if the number is even or not using if else.
    function isEven(num)
    {
       if(num%2===0)
       {
           return 'Even';
       }
       else{
           return 'not Even';
       }
    }
   
   console.log(isEven(4));	
   
   
   
20   // WAF to check if the number is even or not using switch.
    function isEven(num)
    {
      let res=num%2;
      switch(res)
      {
          case 0 :return 'Even'
          default : return 'Not Even'
      }
    }
   
   console.log(isEven(4));  
   
   
   
21   // WAF to reverse only word in the string.
   // Example:
   // "hello this is sample"
   // o/p
   // "olleh siht si elpmas"
    function getReverseWord(words)
    {
        words=words.split(' ');
        let res= [];
        for(let i=0;i<words.length;i++)
        {
            let rev= '';
            for(let j=words[i].length-1;j>=0;j--)
            {
                rev +=words[i][j];
            }
            res.push(rev);
        }
        return res.join(' ');
    }
   
   console.log(getReverseWord('hello this is sample'));
   
   
   
 // WAF to count the occuerrence of a given chars in the string .
  
    function getCharCount(str)
    {
        let count =0;
        for(let i=0;i<str.length;i++)
        {
            if(isNaN(str[i]))
            {
                count++;
            }
        }
       
        return count;
    }
   
   console.log(getCharCount('13rahu43'));
   
	   
## Question 1
3 is printed, because that is the value of `i` when the loop terminates. The value is presist in the variable beause the scope of `var` is function wide, not constrained to a block.
## Question 2
150 is printed, because it is the discounted value of 300, the last price to process in the loop. The value is presist in the variable out the block beause the scope of `var` is function wide.
## Question 3
150 is printed, because it is the discounted value of 300, the last price to process in the loop. The `Math.round()` rounds the value to the nearest integer. Here it functions as keeping the two decimal values. However, since the discounted value is 150.0, it doesn't changed the original value after rounding. 
## Question 4
It returns the list of discounted prices. The function takes a list of prices. The loop applies the discount to each price, round to 2 decimles, and push them to another list. The list was returned at the end with discounted values. 
## Question 5
It throws `i is not defined` error because it is defined using `let`, but line 12 which is trying to print i is out of the scope of the paranthesis it is defined. 
## Question 6
It throws `discountedPrice is not defined` error because it is defined using `let` in the for loop, but line 13 which is trying to print it is out the for loop thus out of its scope. 
## Question 7
It prints 150, the last discounted price calculated. Although `finalPrice` is defined using `let`, it is defined at the beginning of the function thus are valid until the close of the block. 
## Question 8
It returns the list of discounted prices. The function takes a list of prices. The loop applies the discount to each price, rounds to 2 decimles, and push them to another list. The list was returned at the end with discounted values. 
## Question 9
The code causes an `i is not defined` error because line 11 is out of the scopr of i. 
## Question 10
It prints 3, the value of legnth. It successfully prints because it is neither out of the range length is defined nor tried to change its value. 
## Question 11
It returns the list of discounted prices. The function takes a list of prices. The loop applies the discount to each price and push them to another list. The list was returned at the end with discounted values. 
## Question 12
### A
student.name
### B
student["Grad Year"]
### C
student.greeting();
### D
student["Favorite Teacher"].name
### E
student.courseLoad[0]
## Question 13
### A
'32' because number 2 is mapped to its string literals and contatenate with the string '3'.
### B 
1 is returned, because '3' is mapped to its integer representation and under arithmatic calculation with - 2. There are no operator overloading for - in string class.  
### C
`null` in javascript represent the intentional absence of any object value. It do make sense for number 3 plus nothing is itself. 
### D
'3null' is returned, because '3' is a string and with operator + makes it representing a concatenating operation. Thus, it contert `null` to an string with the same set of characters.
### E
4 is returned, because true as a boolean value is mapped to 1 as a number. 
### F 
0 is returned, because both 0 as a boolean value is mapped to 0. And 0 + nothing is still 0. 
### G
'3undefined' is returned because similarly, it translates 'undefined' directly to its string literal. 
### H
NaN is returned, because the operation of integer minus an NaN (undefined is mapped to NaN) result in an undefined behavior. NaN means not a number. 
## Question 14
### A
true. It convertes '2' to 2 and compare with 1 and return true. 
### B
false. In this case, both string and are compared according to their alphabetical order. '2' should comes after '1', thus '2' should > '1'. 
### C
true. '2' is casted to its integer value 2, and the comparision is true. 
### D
false. === means strictly comparision, which checks the equlity without type conversion. In the case comparing an string with integer, it returns false. 
### E
false. true is casted to integer 1 and is not equal to 2. 
### F
true. because numbers other than 0 is converted to true in boolean. Here we explictly convert it to a boolean value true, and it is equal to another boolean value ture under strict comparision. 
## Question 15
== is comparision, it will cast the data type automatically if necessary. If one side is integer, it tries to convert the other side to integer. If conversion fails, it converts both sides to string and compares them according to alphabetical order. === means the strict comparision, which make the comparision without automatic type conversion. It returns true if both sides have the same type and value. 
## Question 16
See the part2-question16.js file.
## Question 17
`[ 2, 4, 6]` is returned. `doSomething` is passed in as an function, to the parameter `callback`. In the for loop, `array[i]` gives all the values in the array, and the `callback`, which is `doSomething` here, doubles the number's value. Then they are pushed into the new array. 
## Question 18
See the part2-question18.js file. 
## Question 19
1
4
3
2

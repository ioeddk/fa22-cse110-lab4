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

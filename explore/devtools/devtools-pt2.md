## Question 1
The bug is that `num1` and `num2` was the type of string, and the + operator concat them, rather than find the sum of them. 
## Question 2
To fix it, explicitly cast them to numerical values by adding + before `num1` and `num2`.

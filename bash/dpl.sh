#!/bin/bash

# Get the input argument and store it, toghether with the length
var=$(echo $1 | grep -oi . | sort -f | uniq -i)
echo $var
# Initialize the counter that will kep track of chars that
# appear multiple times
counter=0

# Interate char by char through the string input argument and
# store the char in an array

for c in $var; do

	number=$(echo $1 | grep -oi $c | wc -w)
	if [ $number -gt 1 ]; then
		counter=$(($counter+1))
	fi
done

echo $counter

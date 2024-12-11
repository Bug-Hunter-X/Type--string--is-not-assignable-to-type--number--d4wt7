# Type 'string' is not assignable to type 'number' in TypeScript

This repository demonstrates a common TypeScript type error:  Type 'string' is not assignable to type 'number'. The error occurs when trying to combine arrays of numbers where one array contains a string element.  The solution shows how to properly type check and handle this situation.

## Bug

The `combine` function aims to concatenate two arrays of numbers. However, `arr2` contains a string ("6"), leading to a type error.

## Solution

The solution involves using type guards or assertions to carefully check and handle the potential string element, ensuring the array remains of type number. 
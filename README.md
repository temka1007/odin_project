# odin_project

Second attempt.

Array methods

    arr.push() - add item to the end
    arr.pop() - pops last item of array
    arr.shift() - remove item from the beginning (considered slow because it shifts entire index of array)
    arr.unshift() - add item in the beginning

    splice() => swiss knife for arrays insert/remove/replace

        array.splice(start[, deleteCount, elem1, ..., elemN])

        !!! The arrays are objects (delete obj.key)

        - Splice cuts from original array, send assign it new one

    slice() => simple splice()

        arr.slice([start], [end])

        Def. retruns new array copying to all items from start to end

        ! also support negative indes

    concat() => creates new array from other arrays and new items included

        arr.concat([array])

        - it can accept arrays and values.

    forEach() => runs function for every element in array

        arr.forEach(function(item, index, array))

Searching in array

    - .indexOf() => Give index location of item in the array

        ! if item doesn't exist, it will return -1.

    - .lastIndexOf() => same as indexOf(), but count from last

        ! if item doesn't exist, it will return -1.

    - .inludes() => just tell item exist in array by booleon value


    .findIndex() => finding a SPECIFIC item's position.

        - Ideal for finding first occurance of item based on condition

        -it will return index locations

3 great horse man of array methods

    .filter() => create new array with only items that pass a test

        - doesn't modify orginal array

        array.filter(callback(element[, index[, array ]])[, thisArg])

    .map() => apply transformation function to each element of array

! NOTE: array.length = 0; it clears the array without breaking its referance.

Loop
// Looping through array collection

    1. the for ... of loop - one of the basic loops
        - for ... of (it is recommented over "for loop" while looping through collection)

    2. map() and filter() are both loop type.

    // The standard for loop

    3. for loop

        - for (initializer; condition; final expression) {}

    // Exiting from loop
    4. "break" this statement will immediately exit the loop

    5. "continue" skip to next iteration of loop

    // While and do ... while

        6. (while) loop

            initializer
            while (condition) {
                code to run

                ! final-expression
            }

        7. (do ... while) loop

            initializer
            do {
                code to run

                ! final expression
            } while (condition)



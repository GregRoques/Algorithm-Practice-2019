// My string reversal

const reverseString = aString => {
   console.log( aString.split("").reverse().join(""))
}
reverseString('doggy')

// ___________________________________________________________________

// What is better code?
   // - faster and less-memory

      // You can use timers to achieve this:
   
   // ex:
   // use in browser – Google Chrome Source

   const addUpTo = n =>{
      let total = 0;
      for (let i = 1; i <= n; i++){
         total += i;
      }
      console.log(total)
   }

   // var t1 = performance.now();
   addUpTo(100);
   // var t2 = performance.now();
   
   // console.log(`Time Elapsed ${(t2 - t1) / 1000} seconds.`)

      // ================================== This said...the problem with time
         // 1. Different machines will have different times
         // 2. The same machine will have different times
         // 3. For fast algorithms, speed measurements may not be precise enough

// ___________________________________________________________________

   // Big O Notation – Discusses how the runtime of an algorithm grows as its input grows.

   //  O(1) - constant; no change in run time
   //  O(n) - linear growth; grows at same rate as n ...loops
   //  O(n^2) – quadratic; squares in relation to n ... nested loops

   // ============= Some Rules:

   // Constants:
      // 1. Arithmetic operations are constant
      // 2. variable assignments are constant
      // 3. Accessing elements in an array (by index or object key) is constant

      // 4.In a loop, the complexity of the loop is the length of the loop times the complexity
         // of whatever is happening inside the loop

// ==================== Space Complexity (or memory)

      // "auxilary space" refers to space taken up by the algorithm, not by the inputs
      // Space complexity as it relates to auxillary space deals with the inputs

      // JS Space Complexity Rules of Thumb:
         // 1.  Most primitives (booleans, numbers, undefined, null) are constant space
         // 2. Strings require O(n) space (where n is the length)
         // 3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for obects)

// ___________________________________________________________________

// Logarithms
   // the inverse of exponents(also known as 'to the power of'...2^3...the superscript)
   // we just use the shorthand "log"...not log + subscript

   // put another way:
      // The logarithm of a number roughly measures the number of times you can divide that number by 2
         // before you get a value that's less than or equal to one.

         // so... log(8) = 3; or, 8 /2 = 4/2 = 2/2 =1 ...divisible by 2 three times

// ___________________________________________________________________

// Big O with Objects
   // When you don't need order

   // Insertion - O(1)
   // Removal - O(1)
   // Searching - O(n)
   // Access - O(1)

   // when searching, .hasOwnProperty is constant time (O(1))
   // ex:

   let cats = {
      youngest: 'Nacheaux',
      middleChild: 'Midnight',
      aarpCardHolder: 'Callie'
   }

   console.log(cats.hasOwnProperty('youngest'))

// ___________________________________________________________________

// Big O with Arrays
   // when you need an ordered list

   // Accessing (or, refercing by elemebt) is O(1)
   // Insertion, deletion...Big O run time depends on order
      // For example, .push() and .pop() are constant time
         
      // On the contrary, inserting at the beginning slows things as all of the other
            // elements are re-indexed

      // ...so it is best to add and remove from the beginning!


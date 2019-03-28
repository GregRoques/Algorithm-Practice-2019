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
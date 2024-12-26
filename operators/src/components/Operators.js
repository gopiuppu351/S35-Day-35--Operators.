import React from 'react'

function Operators() {
  let score = 0;


  return (
    <div className='App'>
      <h1>Learning Operators</h1>

      <button type='button' onClick={()=>{
        let a = 20%7
        console.log(a)
      }}>Arithmatic Operators</button>

      <button type='button' onClick={()=>{
        score ++;
        console.log(score);
      }}>Increment</button>

     <button type='button' onClick={()=>{
        score --;
        console.log(score);
      }}>Decrement</button>


      <button type='button' onClick={()=>{
        let a=10;
        a += 2;
        a -= 3;
        a %=7;
        a *= 10;

        console.log(a);

      }}>Assignment Operators</button>

      <button type='button' onClick={()=>{
        let engMarks = 87;
        console.log(engMarks == 87);
        console.log(engMarks != 52);
        console.log(engMarks >= 35);
        console.log(engMarks <= 35);
        console.log(engMarks > 89);
        console.log(engMarks < 56);
      }}>Comparision Operators</button>

      <button type='button' onClick={()=>{
        let engMarks = 87;

        if(engMarks >= 35){
          console.log(`Student Passed in english`)
        }else{
          console.log(`Student Failed in english`)
        }

      }}>ifelse</button>


    </div>
  )
}

export default Operators

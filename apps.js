/*
Choosey Life Game pseudo code test 1: Balancing out the Life Points!

***** Goals *****

1- Balancing option's point system to make sense towards its max total. 
2- Logging result of sum or substraction of points.
3- Determinating a minimum and max amount of points reached by end of storyline.
Note for #3: the max and min amount of points won't be determined till all options are constructed.
Therefore, the ultimate score will absolutely need to be modified, because 200 will most likely be surpassed.

//example where the options return values going from 1 to 100 points, and the total of the first 3 sections: health, parenting, and economic background lead to 100 points: 

//now testing Starting Phase which total will = up to 25 points?
// virtue = max of 25 points <-- new addition.
// parenting= max of 25 points
// health = max of 25 points
// economic background= max of 25 points

// We now have a cap of 100 points max for the Baby phase. Which means that if EACH phase's total output has a max of 25 points, total starting Life Points will not pass 100. 

//let A= Perfect parental situation. =  25 points
//let B= Decent situation. = 20 points
//let C=Not the best= 15 points
//let D=Truly sad= 10 points

Changes made to points system:
  1- 'Virtue' was added so that each section would give us 25 EVEN points towards 100 starting Life Points, because 4/100 = 25
  2- If the lowest option for each of the 4 starting sections is worth 10 points, then the minimum amount of points for overall starting Life Points is definetly 40. because 4*10=40.

  Goals achieved:
  1- Balanced and determined that the Baby Phase will have 4 determining factors in which each one will output a max of 25 points and minimum of 40 points towards total Baby Phase aka Starting Points.

  ****==== Baby Phase is now changed to be worth from 40-100 points. ====******
  
 */

/* Testing: calling text values for Baby Phase: Parents */

function switchOfBabyPhase(parents) {
    let answer="";
    switch(parents) {
        case 'a':
        parents= "You were born on a rainy Sunday night. Your parents are a couple of loving people. Your father is very dotting and spends a lot of time with you, and your mother cooks the best meals and likes to stroll you around the park. You have a very large and loud family including three sisters, two brothers, a cat, and a dog. ";
        break;

        case 'b':
        parents= "Your father--may he rest in peace--died fighting a never ending war miles and miles away from home. He has left you an encouraging letter written during his last days when he learned his chances of survival weren't good. On this insanely hot summer afternoon, your mother reads it aloud to soothe your newborn cries. Your mother will have to be both the breadwinner and the emotional pillar of your early years. Your extended family is excited to have you around and they say you resemble your late father.";
        break;

        case 'c':
        parents= "Your parents are unknown to you. On this sunny Tuesday in Autumn, you were born in a church-ran orphanage and will have to be raised by the nuns residing in the convent. Your new siblings from another mother, rejoice in the playground. Your early years will be strict and religious, yet safe.";
        break;

        case 'd':
        parents= "Today is March, friday the 13th. It is thundering outside and your crackhead mother has just traded you for a box of menthols. The old lady who takes you into adoption was once her highschool teacher. Who is your father? Only the heavens know! You will never hear from your biological parents again, but at least you are brought into a home where a baby was truely a miracle. You will most likely be spoiled rotten."
        break;

        default:
        parents="Please choose an option.";
        break;

    }
/* testing output of text values */

};
console.log(switchOfBabyPhase(a))
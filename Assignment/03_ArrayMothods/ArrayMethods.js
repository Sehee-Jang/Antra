// Q1. make a string out of an array 주어진 배열을 string으로 변환
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('|'); // (안에 구분자 ','나 '|'등을 넣지 않아도 자동으로 ,가 들어감)
    console.log(result);

}

// Q2. make an array out of a string 주어진 string을 array로 변환
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result1 = fruits.split(',');
    const result2 = fruits.split(',', 2); // limit: optional
    console.log(result1);
    console.log(result2);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const result1 = array.splice(0, 2); splice는 배열 자체에서 데이터를 삭제,  index0부터 2개를 삭제하겠다
    // console.log(result1); 삭제하는 값 1,2 출력
    // console.log(array); 삭제하고 남은 값 3,4,5 출력

    const result2 = array.slice(2, 5); // end값은 배제되어 출력되므로 그 다음 값으로 지정
    console.log(result2); 
    console.log(array); // 기존 배열은 변경되지 않고 그대로 있음

}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
}

}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find(function(student, index){
        console.log(student, index);
    });

}

// Q6. make an array of enrolled students
{
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}
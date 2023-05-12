function RelationshipStatus() {
    let joe = (Math.floor(Math.random()*100));
    let jos = (Math.floor(Math.random()*100));
    let average = (joe + jos)/2;
     switch (true) {
        case (average >= 70):
            setTimeout(() => {
                console.log(`joseph you have ${joe}% affection for josephine,`)
            }, 2000);
            setTimeout(() => {
                console.log(`josephine you have,${jos}% for joseph.`)
            }, 3000);
           setTimeout(() => {
            console.log(`However ,your average love score is ${average}% so you are compatible`)
           }, 4000);
            break;
        case (average >= 60):
           setTimeout(() => {
            console.log(`joseph you have ${joe}% affection for josephine,`)
           }, 2000); 
            setTimeout(() => {
                console.log(`josephine you have,${jos}% for joseph.`)
            }, 3000);
          setTimeout(() => {
            console.log(`However ,your average love score is ${average}% so you are slightly compatible.`)
          }, 4000);
            break;
        case (average >= 50):
           setTimeout(() => {
            
            console.log(`joseph you have ${joe}% affection for josephine`) 
           }, 2000);
           setTimeout(() => {
            console.log (`josephine you have,${jos}% for joseph`)
           }, 3000);
           setTimeout(() => {
            console.log (`.However ,your average love score is ${average}% so you are managable`)
           }, 4000);
            break;
        default:          
        setTimeout(() => {
            console.log(`joseph you have ${joe}% affection for josephine`) 
        }, 2000);
       setTimeout(() => {
        console.log(`josephine you have,${jos}% for joseph`)
       }, 3000);
       setTimeout(() => {
        console.log (`.However ,your average love score is ${average}% so japa`)
       }, 4000);
     }       
}
RelationshipStatus();



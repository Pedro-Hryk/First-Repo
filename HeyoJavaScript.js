let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
},


function attendanceCheck(day){

    let students = [];
    let arr = [];
    for(let i = 0; i < classRoom.length; i++){
        
        let key = Object.keys(classRoom[i]);
        for(let j = 0; j < classRoom[i][key].length; j++){
            
            if(classRoom[i][key][j][day] === true){                
                students.push(key[0]);
            }
        }
        
    }
    return students;
    
  
}

console.log(attendanceCheck('Monday'));


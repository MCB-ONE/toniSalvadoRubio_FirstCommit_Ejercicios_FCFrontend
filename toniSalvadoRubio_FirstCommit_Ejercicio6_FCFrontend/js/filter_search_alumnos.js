document.querySelector("#filter-alumnos").onkeyup = function(){
    $TableFilter("#table-alumnos", this.value);
}

$TableFilter = function(id, value){

    var table, rows, showRow = false, row;

    table = document.querySelector(id);
    rows = table.rows;
    for(var i = 0; i < rows.length; i++){
        showRow = false;
        
        row = rows[i];

        i !=0 ? row.style.display = 'none' : row.style.display = null;
        
        // Loop en los tres primeros campos solamente: nombre, ciudad y país
        for(var x = 0; x < 3; x++){
            if(row.children[x].textContent.toLowerCase().indexOf(value.toLowerCase().trim()) > -1){
                showRow = true;
                break;
            }
        }
        
        if(showRow){
            row.style.display = null;
        }
    }
}

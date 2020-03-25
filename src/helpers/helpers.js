export const checkPresupuesto = (presup, restante) => {
    let clase = "";
    if((presup / 4) > restante){
        clase = "alert alert-danger";
    }else if((presup / 2) > restante){
        clase = "alert alert-warning";
    }else{
        clase = "alert alert-success";
    }
    return clase;
}
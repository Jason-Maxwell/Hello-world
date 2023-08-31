export const User_Add='User_Add';
export const User_Delete='User_Delete';
export const addUser  =(data)=>{
    return{
        type: User_Add,
        payload: data

    }
}
export const deleteUser  =(id)=>{
    return{
        type: User_Delete,
        payload: id

    }
}
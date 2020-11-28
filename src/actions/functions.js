export const unique = (list, key) => {
    // console.log('list', list);
    let data = [...new Set(list.data.listServices.items.map(item => item[key]))];

    
    return data.map(element => {
        return list.data.listServices.items.find((item2)=>{
            if(element==item2[key]){
                return item2;
            }
        })
    });
};
export const unique = (list, key) => {
    console.log('list', list);
    let items = [...new Set(list.data.listServices.items.map(item => item[key]))];

    
    return items.map(element => {
        return list.data.listServices.items.find((item2)=>{
            if(element==item2.serviceType){
                return item2;
            }
        })
    });
};
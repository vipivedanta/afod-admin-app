export const unique = (list, key) => {
    console.log('list', list);
    let items = [...new Set(list.data.listServices.items.map(item => item[key]))];

    const formattedResult = items.map((element, index) => {
        return {
            id: index+1,
            name: element,
            status: 'active'
        }
    });
    return formattedResult;
};
const getStoredList = () => {
    const storedList = localStorage.getItem("read-list");
    if(storedList){
        const storedListStr = JSON.parse(storedList)
        return storedListStr;
    }else{
        return [];
    }
}

const setValue = (id) => {
    const storedList = getStoredList()
    if(storedList.includes(id)){
        console.log(id, "already exist")
    }else{
        storedList.push(id)
        const storedListStr = JSON.stringify(storedList)
        localStorage.setItem("read-list", storedListStr)

    }
}
export {setValue, getStoredList}
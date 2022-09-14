
export const storeData = async (key:string, value:any) => {
    try {
        await localStorage.setItem(key, value)
    } catch (e) {
        // saving error
        return true;
    }
}

export const storeObj = async (key:string, obj:Object) => {
    try {
        const jsonValue = JSON.stringify(obj)
        await localStorage.setItem(key, jsonValue)
    } catch (e) {
        // saving error
    }
}

export const getData = async (key:string) => {
    try {
        const value = await localStorage.getItem(key)
        if(value !== null) {
            // value previously stored
        }
    } catch(e) {
        // error reading value
    }
}


export const getObj = async (key:string) => {
    try {
        const jsonValue = await localStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        // error reading value
    }
}

export const getAllKeys = async () => {

    try {
        return await localStorage.getAllKeys()
    } catch (e) {
        // read key error
    }
}

export const removeData = async (key:string) => {
    try {
        await localStorage.removeItem(key)
    } catch(e) {
        // remove error
    }
}

export const removeMultiple = async (keys:string[]) => {
    try {
        await localStorage.multiRemove(keys)
    } catch(e) {
        // remove error
    }
}

export const setMultipleData = async (data: [string,string][]) => {
    try {
        await localStorage.multiSet(data)
    } catch(e) {
        // read error
    }
}
export const getMultipleData = async (keys:string[]) => {
    try {
        return await localStorage.multiGet(keys)
    } catch(e) {
        return {
            error: e
        }
    }
}
export const clearAll = async () => {
    try {
        await localStorage.clear()
    } catch(e) {
        // clear error
    }
}




export const mergeObj = async (key:string, newObj:Object) => {
    try {
        if (localStorage.mergeItem) {
            await localStorage.mergeItem(key, JSON.stringify(newObj));
        }
    } catch(e) {
        // error reading value
    }
}



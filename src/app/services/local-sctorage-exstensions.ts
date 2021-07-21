
export class LocalStorageExstensions {

    static updateLocalStorage<Type>(itemName: string, entities: Type[]): void {
        const usersStringFormat: string = JSON.stringify(entities);
        localStorage.setItem(itemName, usersStringFormat);
    }

    static getDataFromStorage<Type>(itemName: string): Type[] {
        let entities: Type[] = [];
        let entitiesStringFormat: string | null = localStorage.getItem(itemName);
        if (entitiesStringFormat) {
            try {
                entities = JSON.parse(entitiesStringFormat);
            }
            catch (e) {
                console.error(e);
            }
        }
        else {
            console.warn("No data in local storage.");
        }

        return entities;
    }
}

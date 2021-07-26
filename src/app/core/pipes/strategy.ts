export interface IFilterStrategy {
    filter(items: any[], searchString: string): any[];
}

export class UserFilterStrategy implements IFilterStrategy {

    public filter(items: any[], searchString: string): any[] {
        if (searchString === "") {
            return items;
        }
        return items.filter((item) => {
            const itemString: string = item.name + " " + item.surname;
            return itemString.toUpperCase().includes(searchString.toString().toUpperCase());
        });
    }

}

export class TaskFilterStrategy implements IFilterStrategy {
    public filter(items: any[], searchString: string): any[] {
        if (searchString === "") {
            return items;
        }
        return items.filter((item) => item.name.toUpperCase().includes(searchString.toString().toUpperCase()));
    }
}

export class FilterContext {
    private strategy: IFilterStrategy;

    constructor(strategy: IFilterStrategy) {
        this.strategy = strategy;
    }

    public executeStrategy(items: any[], searchString: string): any[] {
        return this.strategy.filter(items, searchString);
    }
}

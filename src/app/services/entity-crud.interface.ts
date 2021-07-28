import { FilterContext } from "../core/pipes/strategy";

export interface IEntityCrud<Type> {

    getAllEntities(): Type[];

    getEntity(id: number): Type | undefined;

    addEntity(entity: Type): void;

    updateEntity(oldEntity:Type, newEntity: Type): void;

    deleteEntity(id: number): void;

    filterEntity(searchString:string, context:FilterContext):void;

}

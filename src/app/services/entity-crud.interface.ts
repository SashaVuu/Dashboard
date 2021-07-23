export interface IEntityCrud<Type> {

    getAllEntities(): Type[];

    getEntity(id: number): Type | undefined;

    addEntity(entity: Type): void;

    updateEntity(oldEntity:Type, newEntity: Type): void;

    deleteEntity(id: number): void;

}

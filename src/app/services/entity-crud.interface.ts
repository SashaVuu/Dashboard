export interface IEntityCrud<Type> {

    getAllEntities(): Type[];

    getEntity(id: number): Type | undefined;

    addEntity(entity: Type): void;

    updateEntity(entity: Type): void;

    deleteEntity(id: number): void;

}

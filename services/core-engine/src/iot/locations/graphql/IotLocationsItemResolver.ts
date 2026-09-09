export const IotLocationsItemGqlTypeDefs = `
  type IotLocationsItem {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getIotLocationsItem(id: ID!): IotLocationsItem
    listIotLocationsItems(tenantId: String!, limit: Int): [IotLocationsItem!]!
  }

  extend type Mutation {
    createIotLocationsItem(tenantId: String!, code: String!, name: String!): IotLocationsItem!
    deleteIotLocationsItem(id: ID!): Boolean!
  }
`;

export const IotLocationsItemGqlResolvers = {
  Query: {
    getIotLocationsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

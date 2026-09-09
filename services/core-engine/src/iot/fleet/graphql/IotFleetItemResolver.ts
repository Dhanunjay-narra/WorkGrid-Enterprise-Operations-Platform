export const IotFleetItemGqlTypeDefs = `
  type IotFleetItem {
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
    getIotFleetItem(id: ID!): IotFleetItem
    listIotFleetItems(tenantId: String!, limit: Int): [IotFleetItem!]!
  }

  extend type Mutation {
    createIotFleetItem(tenantId: String!, code: String!, name: String!): IotFleetItem!
    deleteIotFleetItem(id: ID!): Boolean!
  }
`;

export const IotFleetItemGqlResolvers = {
  Query: {
    getIotFleetItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

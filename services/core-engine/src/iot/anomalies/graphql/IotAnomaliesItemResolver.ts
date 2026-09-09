export const IotAnomaliesItemGqlTypeDefs = `
  type IotAnomaliesItem {
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
    getIotAnomaliesItem(id: ID!): IotAnomaliesItem
    listIotAnomaliesItems(tenantId: String!, limit: Int): [IotAnomaliesItem!]!
  }

  extend type Mutation {
    createIotAnomaliesItem(tenantId: String!, code: String!, name: String!): IotAnomaliesItem!
    deleteIotAnomaliesItem(id: ID!): Boolean!
  }
`;

export const IotAnomaliesItemGqlResolvers = {
  Query: {
    getIotAnomaliesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

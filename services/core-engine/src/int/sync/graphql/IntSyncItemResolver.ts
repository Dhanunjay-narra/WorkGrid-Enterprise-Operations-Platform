export const IntSyncItemGqlTypeDefs = `
  type IntSyncItem {
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
    getIntSyncItem(id: ID!): IntSyncItem
    listIntSyncItems(tenantId: String!, limit: Int): [IntSyncItem!]!
  }

  extend type Mutation {
    createIntSyncItem(tenantId: String!, code: String!, name: String!): IntSyncItem!
    deleteIntSyncItem(id: ID!): Boolean!
  }
`;

export const IntSyncItemGqlResolvers = {
  Query: {
    getIntSyncItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

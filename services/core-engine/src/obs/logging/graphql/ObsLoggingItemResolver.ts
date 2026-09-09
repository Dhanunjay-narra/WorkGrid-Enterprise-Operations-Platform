export const ObsLoggingItemGqlTypeDefs = `
  type ObsLoggingItem {
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
    getObsLoggingItem(id: ID!): ObsLoggingItem
    listObsLoggingItems(tenantId: String!, limit: Int): [ObsLoggingItem!]!
  }

  extend type Mutation {
    createObsLoggingItem(tenantId: String!, code: String!, name: String!): ObsLoggingItem!
    deleteObsLoggingItem(id: ID!): Boolean!
  }
`;

export const ObsLoggingItemGqlResolvers = {
  Query: {
    getObsLoggingItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

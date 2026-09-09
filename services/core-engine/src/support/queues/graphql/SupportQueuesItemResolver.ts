export const SupportQueuesItemGqlTypeDefs = `
  type SupportQueuesItem {
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
    getSupportQueuesItem(id: ID!): SupportQueuesItem
    listSupportQueuesItems(tenantId: String!, limit: Int): [SupportQueuesItem!]!
  }

  extend type Mutation {
    createSupportQueuesItem(tenantId: String!, code: String!, name: String!): SupportQueuesItem!
    deleteSupportQueuesItem(id: ID!): Boolean!
  }
`;

export const SupportQueuesItemGqlResolvers = {
  Query: {
    getSupportQueuesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

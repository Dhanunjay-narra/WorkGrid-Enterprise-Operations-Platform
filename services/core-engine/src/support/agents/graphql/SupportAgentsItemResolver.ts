export const SupportAgentsItemGqlTypeDefs = `
  type SupportAgentsItem {
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
    getSupportAgentsItem(id: ID!): SupportAgentsItem
    listSupportAgentsItems(tenantId: String!, limit: Int): [SupportAgentsItem!]!
  }

  extend type Mutation {
    createSupportAgentsItem(tenantId: String!, code: String!, name: String!): SupportAgentsItem!
    deleteSupportAgentsItem(id: ID!): Boolean!
  }
`;

export const SupportAgentsItemGqlResolvers = {
  Query: {
    getSupportAgentsItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

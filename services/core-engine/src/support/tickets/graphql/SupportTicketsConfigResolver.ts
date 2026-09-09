export const SupportTicketsConfigGqlTypeDefs = `
  type SupportTicketsConfig {
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
    getSupportTicketsConfig(id: ID!): SupportTicketsConfig
    listSupportTicketsConfigs(tenantId: String!, limit: Int): [SupportTicketsConfig!]!
  }

  extend type Mutation {
    createSupportTicketsConfig(tenantId: String!, code: String!, name: String!): SupportTicketsConfig!
    deleteSupportTicketsConfig(id: ID!): Boolean!
  }
`;

export const SupportTicketsConfigGqlResolvers = {
  Query: {
    getSupportTicketsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

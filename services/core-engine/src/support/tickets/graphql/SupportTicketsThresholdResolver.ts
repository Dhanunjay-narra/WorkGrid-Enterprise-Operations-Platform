export const SupportTicketsThresholdGqlTypeDefs = `
  type SupportTicketsThreshold {
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
    getSupportTicketsThreshold(id: ID!): SupportTicketsThreshold
    listSupportTicketsThresholds(tenantId: String!, limit: Int): [SupportTicketsThreshold!]!
  }

  extend type Mutation {
    createSupportTicketsThreshold(tenantId: String!, code: String!, name: String!): SupportTicketsThreshold!
    deleteSupportTicketsThreshold(id: ID!): Boolean!
  }
`;

export const SupportTicketsThresholdGqlResolvers = {
  Query: {
    getSupportTicketsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

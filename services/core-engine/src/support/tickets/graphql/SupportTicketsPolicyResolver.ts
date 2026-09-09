export const SupportTicketsPolicyGqlTypeDefs = `
  type SupportTicketsPolicy {
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
    getSupportTicketsPolicy(id: ID!): SupportTicketsPolicy
    listSupportTicketsPolicys(tenantId: String!, limit: Int): [SupportTicketsPolicy!]!
  }

  extend type Mutation {
    createSupportTicketsPolicy(tenantId: String!, code: String!, name: String!): SupportTicketsPolicy!
    deleteSupportTicketsPolicy(id: ID!): Boolean!
  }
`;

export const SupportTicketsPolicyGqlResolvers = {
  Query: {
    getSupportTicketsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

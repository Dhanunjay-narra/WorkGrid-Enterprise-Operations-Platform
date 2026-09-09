export const SupportTicketsBatchGqlTypeDefs = `
  type SupportTicketsBatch {
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
    getSupportTicketsBatch(id: ID!): SupportTicketsBatch
    listSupportTicketsBatchs(tenantId: String!, limit: Int): [SupportTicketsBatch!]!
  }

  extend type Mutation {
    createSupportTicketsBatch(tenantId: String!, code: String!, name: String!): SupportTicketsBatch!
    deleteSupportTicketsBatch(id: ID!): Boolean!
  }
`;

export const SupportTicketsBatchGqlResolvers = {
  Query: {
    getSupportTicketsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

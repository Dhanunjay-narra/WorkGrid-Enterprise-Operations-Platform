export const SupportTicketsSummaryGqlTypeDefs = `
  type SupportTicketsSummary {
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
    getSupportTicketsSummary(id: ID!): SupportTicketsSummary
    listSupportTicketsSummarys(tenantId: String!, limit: Int): [SupportTicketsSummary!]!
  }

  extend type Mutation {
    createSupportTicketsSummary(tenantId: String!, code: String!, name: String!): SupportTicketsSummary!
    deleteSupportTicketsSummary(id: ID!): Boolean!
  }
`;

export const SupportTicketsSummaryGqlResolvers = {
  Query: {
    getSupportTicketsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

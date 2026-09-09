export const SupportEscalationSummaryGqlTypeDefs = `
  type SupportEscalationSummary {
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
    getSupportEscalationSummary(id: ID!): SupportEscalationSummary
    listSupportEscalationSummarys(tenantId: String!, limit: Int): [SupportEscalationSummary!]!
  }

  extend type Mutation {
    createSupportEscalationSummary(tenantId: String!, code: String!, name: String!): SupportEscalationSummary!
    deleteSupportEscalationSummary(id: ID!): Boolean!
  }
`;

export const SupportEscalationSummaryGqlResolvers = {
  Query: {
    getSupportEscalationSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

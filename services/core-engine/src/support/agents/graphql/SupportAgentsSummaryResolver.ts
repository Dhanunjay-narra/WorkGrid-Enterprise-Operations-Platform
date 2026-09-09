export const SupportAgentsSummaryGqlTypeDefs = `
  type SupportAgentsSummary {
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
    getSupportAgentsSummary(id: ID!): SupportAgentsSummary
    listSupportAgentsSummarys(tenantId: String!, limit: Int): [SupportAgentsSummary!]!
  }

  extend type Mutation {
    createSupportAgentsSummary(tenantId: String!, code: String!, name: String!): SupportAgentsSummary!
    deleteSupportAgentsSummary(id: ID!): Boolean!
  }
`;

export const SupportAgentsSummaryGqlResolvers = {
  Query: {
    getSupportAgentsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

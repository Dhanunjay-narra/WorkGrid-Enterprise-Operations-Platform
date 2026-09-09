export const SupportCsatSummaryGqlTypeDefs = `
  type SupportCsatSummary {
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
    getSupportCsatSummary(id: ID!): SupportCsatSummary
    listSupportCsatSummarys(tenantId: String!, limit: Int): [SupportCsatSummary!]!
  }

  extend type Mutation {
    createSupportCsatSummary(tenantId: String!, code: String!, name: String!): SupportCsatSummary!
    deleteSupportCsatSummary(id: ID!): Boolean!
  }
`;

export const SupportCsatSummaryGqlResolvers = {
  Query: {
    getSupportCsatSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

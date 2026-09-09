export const SupportKnowledgeReportGqlTypeDefs = `
  type SupportKnowledgeReport {
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
    getSupportKnowledgeReport(id: ID!): SupportKnowledgeReport
    listSupportKnowledgeReports(tenantId: String!, limit: Int): [SupportKnowledgeReport!]!
  }

  extend type Mutation {
    createSupportKnowledgeReport(tenantId: String!, code: String!, name: String!): SupportKnowledgeReport!
    deleteSupportKnowledgeReport(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeReportGqlResolvers = {
  Query: {
    getSupportKnowledgeReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

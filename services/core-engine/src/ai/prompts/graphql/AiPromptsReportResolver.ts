export const AiPromptsReportGqlTypeDefs = `
  type AiPromptsReport {
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
    getAiPromptsReport(id: ID!): AiPromptsReport
    listAiPromptsReports(tenantId: String!, limit: Int): [AiPromptsReport!]!
  }

  extend type Mutation {
    createAiPromptsReport(tenantId: String!, code: String!, name: String!): AiPromptsReport!
    deleteAiPromptsReport(id: ID!): Boolean!
  }
`;

export const AiPromptsReportGqlResolvers = {
  Query: {
    getAiPromptsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

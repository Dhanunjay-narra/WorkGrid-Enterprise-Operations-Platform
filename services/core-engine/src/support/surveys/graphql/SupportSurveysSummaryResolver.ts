export const SupportSurveysSummaryGqlTypeDefs = `
  type SupportSurveysSummary {
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
    getSupportSurveysSummary(id: ID!): SupportSurveysSummary
    listSupportSurveysSummarys(tenantId: String!, limit: Int): [SupportSurveysSummary!]!
  }

  extend type Mutation {
    createSupportSurveysSummary(tenantId: String!, code: String!, name: String!): SupportSurveysSummary!
    deleteSupportSurveysSummary(id: ID!): Boolean!
  }
`;

export const SupportSurveysSummaryGqlResolvers = {
  Query: {
    getSupportSurveysSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

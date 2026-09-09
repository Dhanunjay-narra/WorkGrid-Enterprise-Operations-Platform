export const SupportSurveysBatchGqlTypeDefs = `
  type SupportSurveysBatch {
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
    getSupportSurveysBatch(id: ID!): SupportSurveysBatch
    listSupportSurveysBatchs(tenantId: String!, limit: Int): [SupportSurveysBatch!]!
  }

  extend type Mutation {
    createSupportSurveysBatch(tenantId: String!, code: String!, name: String!): SupportSurveysBatch!
    deleteSupportSurveysBatch(id: ID!): Boolean!
  }
`;

export const SupportSurveysBatchGqlResolvers = {
  Query: {
    getSupportSurveysBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

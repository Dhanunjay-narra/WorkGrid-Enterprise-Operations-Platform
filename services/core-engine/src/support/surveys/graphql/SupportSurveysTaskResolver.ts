export const SupportSurveysTaskGqlTypeDefs = `
  type SupportSurveysTask {
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
    getSupportSurveysTask(id: ID!): SupportSurveysTask
    listSupportSurveysTasks(tenantId: String!, limit: Int): [SupportSurveysTask!]!
  }

  extend type Mutation {
    createSupportSurveysTask(tenantId: String!, code: String!, name: String!): SupportSurveysTask!
    deleteSupportSurveysTask(id: ID!): Boolean!
  }
`;

export const SupportSurveysTaskGqlResolvers = {
  Query: {
    getSupportSurveysTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

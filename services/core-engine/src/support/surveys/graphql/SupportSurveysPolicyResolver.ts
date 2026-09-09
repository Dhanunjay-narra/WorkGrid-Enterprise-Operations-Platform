export const SupportSurveysPolicyGqlTypeDefs = `
  type SupportSurveysPolicy {
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
    getSupportSurveysPolicy(id: ID!): SupportSurveysPolicy
    listSupportSurveysPolicys(tenantId: String!, limit: Int): [SupportSurveysPolicy!]!
  }

  extend type Mutation {
    createSupportSurveysPolicy(tenantId: String!, code: String!, name: String!): SupportSurveysPolicy!
    deleteSupportSurveysPolicy(id: ID!): Boolean!
  }
`;

export const SupportSurveysPolicyGqlResolvers = {
  Query: {
    getSupportSurveysPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

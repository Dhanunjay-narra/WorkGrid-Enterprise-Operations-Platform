export const SupportSurveysSessionGqlTypeDefs = `
  type SupportSurveysSession {
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
    getSupportSurveysSession(id: ID!): SupportSurveysSession
    listSupportSurveysSessions(tenantId: String!, limit: Int): [SupportSurveysSession!]!
  }

  extend type Mutation {
    createSupportSurveysSession(tenantId: String!, code: String!, name: String!): SupportSurveysSession!
    deleteSupportSurveysSession(id: ID!): Boolean!
  }
`;

export const SupportSurveysSessionGqlResolvers = {
  Query: {
    getSupportSurveysSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

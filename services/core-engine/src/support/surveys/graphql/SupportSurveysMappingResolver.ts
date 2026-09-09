export const SupportSurveysMappingGqlTypeDefs = `
  type SupportSurveysMapping {
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
    getSupportSurveysMapping(id: ID!): SupportSurveysMapping
    listSupportSurveysMappings(tenantId: String!, limit: Int): [SupportSurveysMapping!]!
  }

  extend type Mutation {
    createSupportSurveysMapping(tenantId: String!, code: String!, name: String!): SupportSurveysMapping!
    deleteSupportSurveysMapping(id: ID!): Boolean!
  }
`;

export const SupportSurveysMappingGqlResolvers = {
  Query: {
    getSupportSurveysMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

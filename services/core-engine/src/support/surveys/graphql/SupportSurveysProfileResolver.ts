export const SupportSurveysProfileGqlTypeDefs = `
  type SupportSurveysProfile {
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
    getSupportSurveysProfile(id: ID!): SupportSurveysProfile
    listSupportSurveysProfiles(tenantId: String!, limit: Int): [SupportSurveysProfile!]!
  }

  extend type Mutation {
    createSupportSurveysProfile(tenantId: String!, code: String!, name: String!): SupportSurveysProfile!
    deleteSupportSurveysProfile(id: ID!): Boolean!
  }
`;

export const SupportSurveysProfileGqlResolvers = {
  Query: {
    getSupportSurveysProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

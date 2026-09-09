export const IntRateLimitsProfileGqlTypeDefs = `
  type IntRateLimitsProfile {
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
    getIntRateLimitsProfile(id: ID!): IntRateLimitsProfile
    listIntRateLimitsProfiles(tenantId: String!, limit: Int): [IntRateLimitsProfile!]!
  }

  extend type Mutation {
    createIntRateLimitsProfile(tenantId: String!, code: String!, name: String!): IntRateLimitsProfile!
    deleteIntRateLimitsProfile(id: ID!): Boolean!
  }
`;

export const IntRateLimitsProfileGqlResolvers = {
  Query: {
    getIntRateLimitsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

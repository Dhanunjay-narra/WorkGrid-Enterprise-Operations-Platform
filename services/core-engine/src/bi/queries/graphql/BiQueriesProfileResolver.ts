export const BiQueriesProfileGqlTypeDefs = `
  type BiQueriesProfile {
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
    getBiQueriesProfile(id: ID!): BiQueriesProfile
    listBiQueriesProfiles(tenantId: String!, limit: Int): [BiQueriesProfile!]!
  }

  extend type Mutation {
    createBiQueriesProfile(tenantId: String!, code: String!, name: String!): BiQueriesProfile!
    deleteBiQueriesProfile(id: ID!): Boolean!
  }
`;

export const BiQueriesProfileGqlResolvers = {
  Query: {
    getBiQueriesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

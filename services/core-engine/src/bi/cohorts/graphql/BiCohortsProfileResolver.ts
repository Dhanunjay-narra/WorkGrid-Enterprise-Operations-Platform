export const BiCohortsProfileGqlTypeDefs = `
  type BiCohortsProfile {
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
    getBiCohortsProfile(id: ID!): BiCohortsProfile
    listBiCohortsProfiles(tenantId: String!, limit: Int): [BiCohortsProfile!]!
  }

  extend type Mutation {
    createBiCohortsProfile(tenantId: String!, code: String!, name: String!): BiCohortsProfile!
    deleteBiCohortsProfile(id: ID!): Boolean!
  }
`;

export const BiCohortsProfileGqlResolvers = {
  Query: {
    getBiCohortsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

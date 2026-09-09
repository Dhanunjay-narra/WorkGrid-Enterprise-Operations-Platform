export const BiAnomaliesProfileGqlTypeDefs = `
  type BiAnomaliesProfile {
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
    getBiAnomaliesProfile(id: ID!): BiAnomaliesProfile
    listBiAnomaliesProfiles(tenantId: String!, limit: Int): [BiAnomaliesProfile!]!
  }

  extend type Mutation {
    createBiAnomaliesProfile(tenantId: String!, code: String!, name: String!): BiAnomaliesProfile!
    deleteBiAnomaliesProfile(id: ID!): Boolean!
  }
`;

export const BiAnomaliesProfileGqlResolvers = {
  Query: {
    getBiAnomaliesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

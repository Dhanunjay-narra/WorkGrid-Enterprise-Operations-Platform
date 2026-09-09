export const BiDashboardsProfileGqlTypeDefs = `
  type BiDashboardsProfile {
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
    getBiDashboardsProfile(id: ID!): BiDashboardsProfile
    listBiDashboardsProfiles(tenantId: String!, limit: Int): [BiDashboardsProfile!]!
  }

  extend type Mutation {
    createBiDashboardsProfile(tenantId: String!, code: String!, name: String!): BiDashboardsProfile!
    deleteBiDashboardsProfile(id: ID!): Boolean!
  }
`;

export const BiDashboardsProfileGqlResolvers = {
  Query: {
    getBiDashboardsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

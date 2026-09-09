export const BiWidgetsProfileGqlTypeDefs = `
  type BiWidgetsProfile {
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
    getBiWidgetsProfile(id: ID!): BiWidgetsProfile
    listBiWidgetsProfiles(tenantId: String!, limit: Int): [BiWidgetsProfile!]!
  }

  extend type Mutation {
    createBiWidgetsProfile(tenantId: String!, code: String!, name: String!): BiWidgetsProfile!
    deleteBiWidgetsProfile(id: ID!): Boolean!
  }
`;

export const BiWidgetsProfileGqlResolvers = {
  Query: {
    getBiWidgetsProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

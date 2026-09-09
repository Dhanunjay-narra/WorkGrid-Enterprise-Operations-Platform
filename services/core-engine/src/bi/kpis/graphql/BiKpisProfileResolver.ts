export const BiKpisProfileGqlTypeDefs = `
  type BiKpisProfile {
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
    getBiKpisProfile(id: ID!): BiKpisProfile
    listBiKpisProfiles(tenantId: String!, limit: Int): [BiKpisProfile!]!
  }

  extend type Mutation {
    createBiKpisProfile(tenantId: String!, code: String!, name: String!): BiKpisProfile!
    deleteBiKpisProfile(id: ID!): Boolean!
  }
`;

export const BiKpisProfileGqlResolvers = {
  Query: {
    getBiKpisProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

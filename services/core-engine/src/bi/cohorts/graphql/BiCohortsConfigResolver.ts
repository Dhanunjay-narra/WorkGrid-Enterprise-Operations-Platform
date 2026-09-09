export const BiCohortsConfigGqlTypeDefs = `
  type BiCohortsConfig {
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
    getBiCohortsConfig(id: ID!): BiCohortsConfig
    listBiCohortsConfigs(tenantId: String!, limit: Int): [BiCohortsConfig!]!
  }

  extend type Mutation {
    createBiCohortsConfig(tenantId: String!, code: String!, name: String!): BiCohortsConfig!
    deleteBiCohortsConfig(id: ID!): Boolean!
  }
`;

export const BiCohortsConfigGqlResolvers = {
  Query: {
    getBiCohortsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiCohortsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

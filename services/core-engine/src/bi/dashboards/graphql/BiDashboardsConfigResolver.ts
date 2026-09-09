export const BiDashboardsConfigGqlTypeDefs = `
  type BiDashboardsConfig {
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
    getBiDashboardsConfig(id: ID!): BiDashboardsConfig
    listBiDashboardsConfigs(tenantId: String!, limit: Int): [BiDashboardsConfig!]!
  }

  extend type Mutation {
    createBiDashboardsConfig(tenantId: String!, code: String!, name: String!): BiDashboardsConfig!
    deleteBiDashboardsConfig(id: ID!): Boolean!
  }
`;

export const BiDashboardsConfigGqlResolvers = {
  Query: {
    getBiDashboardsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

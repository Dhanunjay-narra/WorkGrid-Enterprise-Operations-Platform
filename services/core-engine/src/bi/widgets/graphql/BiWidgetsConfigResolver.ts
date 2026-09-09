export const BiWidgetsConfigGqlTypeDefs = `
  type BiWidgetsConfig {
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
    getBiWidgetsConfig(id: ID!): BiWidgetsConfig
    listBiWidgetsConfigs(tenantId: String!, limit: Int): [BiWidgetsConfig!]!
  }

  extend type Mutation {
    createBiWidgetsConfig(tenantId: String!, code: String!, name: String!): BiWidgetsConfig!
    deleteBiWidgetsConfig(id: ID!): Boolean!
  }
`;

export const BiWidgetsConfigGqlResolvers = {
  Query: {
    getBiWidgetsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiWidgetsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const BiAnomaliesConfigGqlTypeDefs = `
  type BiAnomaliesConfig {
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
    getBiAnomaliesConfig(id: ID!): BiAnomaliesConfig
    listBiAnomaliesConfigs(tenantId: String!, limit: Int): [BiAnomaliesConfig!]!
  }

  extend type Mutation {
    createBiAnomaliesConfig(tenantId: String!, code: String!, name: String!): BiAnomaliesConfig!
    deleteBiAnomaliesConfig(id: ID!): Boolean!
  }
`;

export const BiAnomaliesConfigGqlResolvers = {
  Query: {
    getBiAnomaliesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiAnomaliesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

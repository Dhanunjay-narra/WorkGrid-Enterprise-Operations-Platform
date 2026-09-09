export const BiKpisConfigGqlTypeDefs = `
  type BiKpisConfig {
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
    getBiKpisConfig(id: ID!): BiKpisConfig
    listBiKpisConfigs(tenantId: String!, limit: Int): [BiKpisConfig!]!
  }

  extend type Mutation {
    createBiKpisConfig(tenantId: String!, code: String!, name: String!): BiKpisConfig!
    deleteBiKpisConfig(id: ID!): Boolean!
  }
`;

export const BiKpisConfigGqlResolvers = {
  Query: {
    getBiKpisConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiKpisConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const BiQueriesConfigGqlTypeDefs = `
  type BiQueriesConfig {
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
    getBiQueriesConfig(id: ID!): BiQueriesConfig
    listBiQueriesConfigs(tenantId: String!, limit: Int): [BiQueriesConfig!]!
  }

  extend type Mutation {
    createBiQueriesConfig(tenantId: String!, code: String!, name: String!): BiQueriesConfig!
    deleteBiQueriesConfig(id: ID!): Boolean!
  }
`;

export const BiQueriesConfigGqlResolvers = {
  Query: {
    getBiQueriesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const BiForecastsConfigGqlTypeDefs = `
  type BiForecastsConfig {
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
    getBiForecastsConfig(id: ID!): BiForecastsConfig
    listBiForecastsConfigs(tenantId: String!, limit: Int): [BiForecastsConfig!]!
  }

  extend type Mutation {
    createBiForecastsConfig(tenantId: String!, code: String!, name: String!): BiForecastsConfig!
    deleteBiForecastsConfig(id: ID!): Boolean!
  }
`;

export const BiForecastsConfigGqlResolvers = {
  Query: {
    getBiForecastsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

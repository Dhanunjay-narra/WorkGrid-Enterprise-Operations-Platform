export const ObsMetricsConfigGqlTypeDefs = `
  type ObsMetricsConfig {
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
    getObsMetricsConfig(id: ID!): ObsMetricsConfig
    listObsMetricsConfigs(tenantId: String!, limit: Int): [ObsMetricsConfig!]!
  }

  extend type Mutation {
    createObsMetricsConfig(tenantId: String!, code: String!, name: String!): ObsMetricsConfig!
    deleteObsMetricsConfig(id: ID!): Boolean!
  }
`;

export const ObsMetricsConfigGqlResolvers = {
  Query: {
    getObsMetricsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

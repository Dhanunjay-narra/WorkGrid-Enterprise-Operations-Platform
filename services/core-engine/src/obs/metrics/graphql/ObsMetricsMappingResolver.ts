export const ObsMetricsMappingGqlTypeDefs = `
  type ObsMetricsMapping {
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
    getObsMetricsMapping(id: ID!): ObsMetricsMapping
    listObsMetricsMappings(tenantId: String!, limit: Int): [ObsMetricsMapping!]!
  }

  extend type Mutation {
    createObsMetricsMapping(tenantId: String!, code: String!, name: String!): ObsMetricsMapping!
    deleteObsMetricsMapping(id: ID!): Boolean!
  }
`;

export const ObsMetricsMappingGqlResolvers = {
  Query: {
    getObsMetricsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

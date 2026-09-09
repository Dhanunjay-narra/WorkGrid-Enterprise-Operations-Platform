export const ObsMetricsThresholdGqlTypeDefs = `
  type ObsMetricsThreshold {
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
    getObsMetricsThreshold(id: ID!): ObsMetricsThreshold
    listObsMetricsThresholds(tenantId: String!, limit: Int): [ObsMetricsThreshold!]!
  }

  extend type Mutation {
    createObsMetricsThreshold(tenantId: String!, code: String!, name: String!): ObsMetricsThreshold!
    deleteObsMetricsThreshold(id: ID!): Boolean!
  }
`;

export const ObsMetricsThresholdGqlResolvers = {
  Query: {
    getObsMetricsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsMetricsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

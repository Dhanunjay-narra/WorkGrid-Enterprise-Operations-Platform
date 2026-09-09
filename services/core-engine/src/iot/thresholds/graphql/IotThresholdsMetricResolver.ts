export const IotThresholdsMetricGqlTypeDefs = `
  type IotThresholdsMetric {
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
    getIotThresholdsMetric(id: ID!): IotThresholdsMetric
    listIotThresholdsMetrics(tenantId: String!, limit: Int): [IotThresholdsMetric!]!
  }

  extend type Mutation {
    createIotThresholdsMetric(tenantId: String!, code: String!, name: String!): IotThresholdsMetric!
    deleteIotThresholdsMetric(id: ID!): Boolean!
  }
`;

export const IotThresholdsMetricGqlResolvers = {
  Query: {
    getIotThresholdsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

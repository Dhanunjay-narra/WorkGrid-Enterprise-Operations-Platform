export const IotAnomaliesMetricGqlTypeDefs = `
  type IotAnomaliesMetric {
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
    getIotAnomaliesMetric(id: ID!): IotAnomaliesMetric
    listIotAnomaliesMetrics(tenantId: String!, limit: Int): [IotAnomaliesMetric!]!
  }

  extend type Mutation {
    createIotAnomaliesMetric(tenantId: String!, code: String!, name: String!): IotAnomaliesMetric!
    deleteIotAnomaliesMetric(id: ID!): Boolean!
  }
`;

export const IotAnomaliesMetricGqlResolvers = {
  Query: {
    getIotAnomaliesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

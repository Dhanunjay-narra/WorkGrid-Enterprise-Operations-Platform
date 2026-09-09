export const IotFleetMetricGqlTypeDefs = `
  type IotFleetMetric {
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
    getIotFleetMetric(id: ID!): IotFleetMetric
    listIotFleetMetrics(tenantId: String!, limit: Int): [IotFleetMetric!]!
  }

  extend type Mutation {
    createIotFleetMetric(tenantId: String!, code: String!, name: String!): IotFleetMetric!
    deleteIotFleetMetric(id: ID!): Boolean!
  }
`;

export const IotFleetMetricGqlResolvers = {
  Query: {
    getIotFleetMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

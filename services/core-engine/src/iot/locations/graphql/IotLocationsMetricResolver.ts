export const IotLocationsMetricGqlTypeDefs = `
  type IotLocationsMetric {
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
    getIotLocationsMetric(id: ID!): IotLocationsMetric
    listIotLocationsMetrics(tenantId: String!, limit: Int): [IotLocationsMetric!]!
  }

  extend type Mutation {
    createIotLocationsMetric(tenantId: String!, code: String!, name: String!): IotLocationsMetric!
    deleteIotLocationsMetric(id: ID!): Boolean!
  }
`;

export const IotLocationsMetricGqlResolvers = {
  Query: {
    getIotLocationsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const ObsAlertsMetricGqlTypeDefs = `
  type ObsAlertsMetric {
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
    getObsAlertsMetric(id: ID!): ObsAlertsMetric
    listObsAlertsMetrics(tenantId: String!, limit: Int): [ObsAlertsMetric!]!
  }

  extend type Mutation {
    createObsAlertsMetric(tenantId: String!, code: String!, name: String!): ObsAlertsMetric!
    deleteObsAlertsMetric(id: ID!): Boolean!
  }
`;

export const ObsAlertsMetricGqlResolvers = {
  Query: {
    getObsAlertsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

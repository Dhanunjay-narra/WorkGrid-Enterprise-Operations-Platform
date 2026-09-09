export const CommCallsMetricGqlTypeDefs = `
  type CommCallsMetric {
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
    getCommCallsMetric(id: ID!): CommCallsMetric
    listCommCallsMetrics(tenantId: String!, limit: Int): [CommCallsMetric!]!
  }

  extend type Mutation {
    createCommCallsMetric(tenantId: String!, code: String!, name: String!): CommCallsMetric!
    deleteCommCallsMetric(id: ID!): Boolean!
  }
`;

export const CommCallsMetricGqlResolvers = {
  Query: {
    getCommCallsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

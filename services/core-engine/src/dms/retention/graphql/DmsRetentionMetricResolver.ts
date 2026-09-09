export const DmsRetentionMetricGqlTypeDefs = `
  type DmsRetentionMetric {
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
    getDmsRetentionMetric(id: ID!): DmsRetentionMetric
    listDmsRetentionMetrics(tenantId: String!, limit: Int): [DmsRetentionMetric!]!
  }

  extend type Mutation {
    createDmsRetentionMetric(tenantId: String!, code: String!, name: String!): DmsRetentionMetric!
    deleteDmsRetentionMetric(id: ID!): Boolean!
  }
`;

export const DmsRetentionMetricGqlResolvers = {
  Query: {
    getDmsRetentionMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

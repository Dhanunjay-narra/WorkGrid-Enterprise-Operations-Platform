export const DmsOcrMetricGqlTypeDefs = `
  type DmsOcrMetric {
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
    getDmsOcrMetric(id: ID!): DmsOcrMetric
    listDmsOcrMetrics(tenantId: String!, limit: Int): [DmsOcrMetric!]!
  }

  extend type Mutation {
    createDmsOcrMetric(tenantId: String!, code: String!, name: String!): DmsOcrMetric!
    deleteDmsOcrMetric(id: ID!): Boolean!
  }
`;

export const DmsOcrMetricGqlResolvers = {
  Query: {
    getDmsOcrMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

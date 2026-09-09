export const DmsVersionsMetricGqlTypeDefs = `
  type DmsVersionsMetric {
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
    getDmsVersionsMetric(id: ID!): DmsVersionsMetric
    listDmsVersionsMetrics(tenantId: String!, limit: Int): [DmsVersionsMetric!]!
  }

  extend type Mutation {
    createDmsVersionsMetric(tenantId: String!, code: String!, name: String!): DmsVersionsMetric!
    deleteDmsVersionsMetric(id: ID!): Boolean!
  }
`;

export const DmsVersionsMetricGqlResolvers = {
  Query: {
    getDmsVersionsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

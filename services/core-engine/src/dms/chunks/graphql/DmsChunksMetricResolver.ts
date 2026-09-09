export const DmsChunksMetricGqlTypeDefs = `
  type DmsChunksMetric {
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
    getDmsChunksMetric(id: ID!): DmsChunksMetric
    listDmsChunksMetrics(tenantId: String!, limit: Int): [DmsChunksMetric!]!
  }

  extend type Mutation {
    createDmsChunksMetric(tenantId: String!, code: String!, name: String!): DmsChunksMetric!
    deleteDmsChunksMetric(id: ID!): Boolean!
  }
`;

export const DmsChunksMetricGqlResolvers = {
  Query: {
    getDmsChunksMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsChunksMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

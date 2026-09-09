export const DmsSignaturesMetricGqlTypeDefs = `
  type DmsSignaturesMetric {
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
    getDmsSignaturesMetric(id: ID!): DmsSignaturesMetric
    listDmsSignaturesMetrics(tenantId: String!, limit: Int): [DmsSignaturesMetric!]!
  }

  extend type Mutation {
    createDmsSignaturesMetric(tenantId: String!, code: String!, name: String!): DmsSignaturesMetric!
    deleteDmsSignaturesMetric(id: ID!): Boolean!
  }
`;

export const DmsSignaturesMetricGqlResolvers = {
  Query: {
    getDmsSignaturesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

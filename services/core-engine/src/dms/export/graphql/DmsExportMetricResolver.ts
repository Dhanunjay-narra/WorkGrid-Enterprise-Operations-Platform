export const DmsExportMetricGqlTypeDefs = `
  type DmsExportMetric {
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
    getDmsExportMetric(id: ID!): DmsExportMetric
    listDmsExportMetrics(tenantId: String!, limit: Int): [DmsExportMetric!]!
  }

  extend type Mutation {
    createDmsExportMetric(tenantId: String!, code: String!, name: String!): DmsExportMetric!
    deleteDmsExportMetric(id: ID!): Boolean!
  }
`;

export const DmsExportMetricGqlResolvers = {
  Query: {
    getDmsExportMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

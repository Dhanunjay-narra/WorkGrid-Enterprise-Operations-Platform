export const DmsFilesMetricGqlTypeDefs = `
  type DmsFilesMetric {
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
    getDmsFilesMetric(id: ID!): DmsFilesMetric
    listDmsFilesMetrics(tenantId: String!, limit: Int): [DmsFilesMetric!]!
  }

  extend type Mutation {
    createDmsFilesMetric(tenantId: String!, code: String!, name: String!): DmsFilesMetric!
    deleteDmsFilesMetric(id: ID!): Boolean!
  }
`;

export const DmsFilesMetricGqlResolvers = {
  Query: {
    getDmsFilesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFilesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

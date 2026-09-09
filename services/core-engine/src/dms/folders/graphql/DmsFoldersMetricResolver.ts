export const DmsFoldersMetricGqlTypeDefs = `
  type DmsFoldersMetric {
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
    getDmsFoldersMetric(id: ID!): DmsFoldersMetric
    listDmsFoldersMetrics(tenantId: String!, limit: Int): [DmsFoldersMetric!]!
  }

  extend type Mutation {
    createDmsFoldersMetric(tenantId: String!, code: String!, name: String!): DmsFoldersMetric!
    deleteDmsFoldersMetric(id: ID!): Boolean!
  }
`;

export const DmsFoldersMetricGqlResolvers = {
  Query: {
    getDmsFoldersMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsFoldersMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

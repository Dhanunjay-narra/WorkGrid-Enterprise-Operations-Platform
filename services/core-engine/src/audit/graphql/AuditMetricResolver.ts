export const AuditMetricGqlTypeDefs = `
  type AuditMetric {
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
    getAuditMetric(id: ID!): AuditMetric
    listAuditMetrics(tenantId: String!, limit: Int): [AuditMetric!]!
  }

  extend type Mutation {
    createAuditMetric(tenantId: String!, code: String!, name: String!): AuditMetric!
    deleteAuditMetric(id: ID!): Boolean!
  }
`;

export const AuditMetricGqlResolvers = {
  Query: {
    getAuditMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

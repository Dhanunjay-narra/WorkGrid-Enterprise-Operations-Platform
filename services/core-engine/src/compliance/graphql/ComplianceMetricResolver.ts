export const ComplianceMetricGqlTypeDefs = `
  type ComplianceMetric {
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
    getComplianceMetric(id: ID!): ComplianceMetric
    listComplianceMetrics(tenantId: String!, limit: Int): [ComplianceMetric!]!
  }

  extend type Mutation {
    createComplianceMetric(tenantId: String!, code: String!, name: String!): ComplianceMetric!
    deleteComplianceMetric(id: ID!): Boolean!
  }
`;

export const ComplianceMetricGqlResolvers = {
  Query: {
    getComplianceMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ComplianceMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

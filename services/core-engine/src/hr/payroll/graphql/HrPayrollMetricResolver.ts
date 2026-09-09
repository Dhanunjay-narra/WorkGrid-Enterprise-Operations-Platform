export const HrPayrollMetricGqlTypeDefs = `
  type HrPayrollMetric {
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
    getHrPayrollMetric(id: ID!): HrPayrollMetric
    listHrPayrollMetrics(tenantId: String!, limit: Int): [HrPayrollMetric!]!
  }

  extend type Mutation {
    createHrPayrollMetric(tenantId: String!, code: String!, name: String!): HrPayrollMetric!
    deleteHrPayrollMetric(id: ID!): Boolean!
  }
`;

export const HrPayrollMetricGqlResolvers = {
  Query: {
    getHrPayrollMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

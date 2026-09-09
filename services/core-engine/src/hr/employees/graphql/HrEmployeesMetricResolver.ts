export const HrEmployeesMetricGqlTypeDefs = `
  type HrEmployeesMetric {
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
    getHrEmployeesMetric(id: ID!): HrEmployeesMetric
    listHrEmployeesMetrics(tenantId: String!, limit: Int): [HrEmployeesMetric!]!
  }

  extend type Mutation {
    createHrEmployeesMetric(tenantId: String!, code: String!, name: String!): HrEmployeesMetric!
    deleteHrEmployeesMetric(id: ID!): Boolean!
  }
`;

export const HrEmployeesMetricGqlResolvers = {
  Query: {
    getHrEmployeesMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

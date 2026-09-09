export const IntSalesforceMetricGqlTypeDefs = `
  type IntSalesforceMetric {
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
    getIntSalesforceMetric(id: ID!): IntSalesforceMetric
    listIntSalesforceMetrics(tenantId: String!, limit: Int): [IntSalesforceMetric!]!
  }

  extend type Mutation {
    createIntSalesforceMetric(tenantId: String!, code: String!, name: String!): IntSalesforceMetric!
    deleteIntSalesforceMetric(id: ID!): Boolean!
  }
`;

export const IntSalesforceMetricGqlResolvers = {
  Query: {
    getIntSalesforceMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

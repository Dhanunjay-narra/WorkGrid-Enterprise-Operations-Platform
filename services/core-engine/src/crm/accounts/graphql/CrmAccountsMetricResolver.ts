export const CrmAccountsMetricGqlTypeDefs = `
  type CrmAccountsMetric {
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
    getCrmAccountsMetric(id: ID!): CrmAccountsMetric
    listCrmAccountsMetrics(tenantId: String!, limit: Int): [CrmAccountsMetric!]!
  }

  extend type Mutation {
    createCrmAccountsMetric(tenantId: String!, code: String!, name: String!): CrmAccountsMetric!
    deleteCrmAccountsMetric(id: ID!): Boolean!
  }
`;

export const CrmAccountsMetricGqlResolvers = {
  Query: {
    getCrmAccountsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

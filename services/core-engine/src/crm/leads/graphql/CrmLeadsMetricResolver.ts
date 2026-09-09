export const CrmLeadsMetricGqlTypeDefs = `
  type CrmLeadsMetric {
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
    getCrmLeadsMetric(id: ID!): CrmLeadsMetric
    listCrmLeadsMetrics(tenantId: String!, limit: Int): [CrmLeadsMetric!]!
  }

  extend type Mutation {
    createCrmLeadsMetric(tenantId: String!, code: String!, name: String!): CrmLeadsMetric!
    deleteCrmLeadsMetric(id: ID!): Boolean!
  }
`;

export const CrmLeadsMetricGqlResolvers = {
  Query: {
    getCrmLeadsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

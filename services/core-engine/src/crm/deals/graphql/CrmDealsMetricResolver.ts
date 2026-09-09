export const CrmDealsMetricGqlTypeDefs = `
  type CrmDealsMetric {
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
    getCrmDealsMetric(id: ID!): CrmDealsMetric
    listCrmDealsMetrics(tenantId: String!, limit: Int): [CrmDealsMetric!]!
  }

  extend type Mutation {
    createCrmDealsMetric(tenantId: String!, code: String!, name: String!): CrmDealsMetric!
    deleteCrmDealsMetric(id: ID!): Boolean!
  }
`;

export const CrmDealsMetricGqlResolvers = {
  Query: {
    getCrmDealsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

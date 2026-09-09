export const CrmPipelineMetricGqlTypeDefs = `
  type CrmPipelineMetric {
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
    getCrmPipelineMetric(id: ID!): CrmPipelineMetric
    listCrmPipelineMetrics(tenantId: String!, limit: Int): [CrmPipelineMetric!]!
  }

  extend type Mutation {
    createCrmPipelineMetric(tenantId: String!, code: String!, name: String!): CrmPipelineMetric!
    deleteCrmPipelineMetric(id: ID!): Boolean!
  }
`;

export const CrmPipelineMetricGqlResolvers = {
  Query: {
    getCrmPipelineMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmPipelineMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

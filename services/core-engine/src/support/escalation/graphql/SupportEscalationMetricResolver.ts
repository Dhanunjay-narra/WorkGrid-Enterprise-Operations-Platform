export const SupportEscalationMetricGqlTypeDefs = `
  type SupportEscalationMetric {
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
    getSupportEscalationMetric(id: ID!): SupportEscalationMetric
    listSupportEscalationMetrics(tenantId: String!, limit: Int): [SupportEscalationMetric!]!
  }

  extend type Mutation {
    createSupportEscalationMetric(tenantId: String!, code: String!, name: String!): SupportEscalationMetric!
    deleteSupportEscalationMetric(id: ID!): Boolean!
  }
`;

export const SupportEscalationMetricGqlResolvers = {
  Query: {
    getSupportEscalationMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

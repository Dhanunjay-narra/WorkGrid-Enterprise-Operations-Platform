export const HrLeaveMetricGqlTypeDefs = `
  type HrLeaveMetric {
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
    getHrLeaveMetric(id: ID!): HrLeaveMetric
    listHrLeaveMetrics(tenantId: String!, limit: Int): [HrLeaveMetric!]!
  }

  extend type Mutation {
    createHrLeaveMetric(tenantId: String!, code: String!, name: String!): HrLeaveMetric!
    deleteHrLeaveMetric(id: ID!): Boolean!
  }
`;

export const HrLeaveMetricGqlResolvers = {
  Query: {
    getHrLeaveMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

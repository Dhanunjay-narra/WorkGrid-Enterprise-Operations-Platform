export const HrShiftsMetricGqlTypeDefs = `
  type HrShiftsMetric {
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
    getHrShiftsMetric(id: ID!): HrShiftsMetric
    listHrShiftsMetrics(tenantId: String!, limit: Int): [HrShiftsMetric!]!
  }

  extend type Mutation {
    createHrShiftsMetric(tenantId: String!, code: String!, name: String!): HrShiftsMetric!
    deleteHrShiftsMetric(id: ID!): Boolean!
  }
`;

export const HrShiftsMetricGqlResolvers = {
  Query: {
    getHrShiftsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

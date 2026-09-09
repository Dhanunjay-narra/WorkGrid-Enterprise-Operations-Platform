export const HrAttendanceMetricGqlTypeDefs = `
  type HrAttendanceMetric {
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
    getHrAttendanceMetric(id: ID!): HrAttendanceMetric
    listHrAttendanceMetrics(tenantId: String!, limit: Int): [HrAttendanceMetric!]!
  }

  extend type Mutation {
    createHrAttendanceMetric(tenantId: String!, code: String!, name: String!): HrAttendanceMetric!
    deleteHrAttendanceMetric(id: ID!): Boolean!
  }
`;

export const HrAttendanceMetricGqlResolvers = {
  Query: {
    getHrAttendanceMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

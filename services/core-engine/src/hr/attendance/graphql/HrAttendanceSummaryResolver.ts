export const HrAttendanceSummaryGqlTypeDefs = `
  type HrAttendanceSummary {
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
    getHrAttendanceSummary(id: ID!): HrAttendanceSummary
    listHrAttendanceSummarys(tenantId: String!, limit: Int): [HrAttendanceSummary!]!
  }

  extend type Mutation {
    createHrAttendanceSummary(tenantId: String!, code: String!, name: String!): HrAttendanceSummary!
    deleteHrAttendanceSummary(id: ID!): Boolean!
  }
`;

export const HrAttendanceSummaryGqlResolvers = {
  Query: {
    getHrAttendanceSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrAttendanceSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

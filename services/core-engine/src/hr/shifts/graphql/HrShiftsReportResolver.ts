export const HrShiftsReportGqlTypeDefs = `
  type HrShiftsReport {
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
    getHrShiftsReport(id: ID!): HrShiftsReport
    listHrShiftsReports(tenantId: String!, limit: Int): [HrShiftsReport!]!
  }

  extend type Mutation {
    createHrShiftsReport(tenantId: String!, code: String!, name: String!): HrShiftsReport!
    deleteHrShiftsReport(id: ID!): Boolean!
  }
`;

export const HrShiftsReportGqlResolvers = {
  Query: {
    getHrShiftsReport: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsReport", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

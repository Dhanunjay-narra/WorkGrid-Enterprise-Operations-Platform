export const HrTimesheetTypeDefs = `
  type HrTimesheet {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrTimesheet(id: ID!): HrTimesheet
    listHrTimesheets(tenantId: String!): [HrTimesheet!]!
  }
`;

export const HrTimesheetResolvers = {
  Query: {
    getHrTimesheet: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrTimesheet", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrTimesheets: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrTimesheet", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

export const HrPayrollSlipTypeDefs = `
  type HrPayrollSlip {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrPayrollSlip(id: ID!): HrPayrollSlip
    listHrPayrollSlips(tenantId: String!): [HrPayrollSlip!]!
  }
`;

export const HrPayrollSlipResolvers = {
  Query: {
    getHrPayrollSlip: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrPayrollSlip", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrPayrollSlips: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrPayrollSlip", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

export const HrTaxDeductionTypeDefs = `
  type HrTaxDeduction {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrTaxDeduction(id: ID!): HrTaxDeduction
    listHrTaxDeductions(tenantId: String!): [HrTaxDeduction!]!
  }
`;

export const HrTaxDeductionResolvers = {
  Query: {
    getHrTaxDeduction: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrTaxDeduction", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrTaxDeductions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrTaxDeduction", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

export const FinFiscalYearTypeDefs = `
  type FinFiscalYear {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinFiscalYear(id: ID!): FinFiscalYear
    listFinFiscalYears(tenantId: String!): [FinFiscalYear!]!
  }
`;

export const FinFiscalYearResolvers = {
  Query: {
    getFinFiscalYear: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinFiscalYear", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinFiscalYears: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinFiscalYear", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

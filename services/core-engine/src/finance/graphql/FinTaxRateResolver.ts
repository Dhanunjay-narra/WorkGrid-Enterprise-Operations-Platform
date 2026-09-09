export const FinTaxRateTypeDefs = `
  type FinTaxRate {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinTaxRate(id: ID!): FinTaxRate
    listFinTaxRates(tenantId: String!): [FinTaxRate!]!
  }
`;

export const FinTaxRateResolvers = {
  Query: {
    getFinTaxRate: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinTaxRate", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinTaxRates: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinTaxRate", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

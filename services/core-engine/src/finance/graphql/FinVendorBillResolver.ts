export const FinVendorBillTypeDefs = `
  type FinVendorBill {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinVendorBill(id: ID!): FinVendorBill
    listFinVendorBills(tenantId: String!): [FinVendorBill!]!
  }
`;

export const FinVendorBillResolvers = {
  Query: {
    getFinVendorBill: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinVendorBill", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinVendorBills: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinVendorBill", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

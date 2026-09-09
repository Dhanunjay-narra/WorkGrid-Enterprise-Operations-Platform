export const FinInvoiceTypeDefs = `
  type FinInvoice {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinInvoice(id: ID!): FinInvoice
    listFinInvoices(tenantId: String!): [FinInvoice!]!
  }
`;

export const FinInvoiceResolvers = {
  Query: {
    getFinInvoice: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinInvoice", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinInvoices: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinInvoice", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

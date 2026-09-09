export const FinInvoiceItemTypeDefs = `
  type FinInvoiceItem {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getFinInvoiceItem(id: ID!): FinInvoiceItem
    listFinInvoiceItems(tenantId: String!): [FinInvoiceItem!]!
  }
`;

export const FinInvoiceItemResolvers = {
  Query: {
    getFinInvoiceItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "FinInvoiceItem", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listFinInvoiceItems: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "FinInvoiceItem", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

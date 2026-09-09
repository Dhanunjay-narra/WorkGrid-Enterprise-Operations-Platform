export const InvSupplierTypeDefs = `
  type InvSupplier {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvSupplier(id: ID!): InvSupplier
    listInvSuppliers(tenantId: String!): [InvSupplier!]!
  }
`;

export const InvSupplierResolvers = {
  Query: {
    getInvSupplier: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvSupplier", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvSuppliers: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvSupplier", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

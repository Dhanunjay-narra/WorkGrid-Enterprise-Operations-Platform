export const InvStockMovementTypeDefs = `
  type InvStockMovement {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvStockMovement(id: ID!): InvStockMovement
    listInvStockMovements(tenantId: String!): [InvStockMovement!]!
  }
`;

export const InvStockMovementResolvers = {
  Query: {
    getInvStockMovement: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvStockMovement", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvStockMovements: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvStockMovement", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

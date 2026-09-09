export const InvStockReservationTypeDefs = `
  type InvStockReservation {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvStockReservation(id: ID!): InvStockReservation
    listInvStockReservations(tenantId: String!): [InvStockReservation!]!
  }
`;

export const InvStockReservationResolvers = {
  Query: {
    getInvStockReservation: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvStockReservation", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvStockReservations: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvStockReservation", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

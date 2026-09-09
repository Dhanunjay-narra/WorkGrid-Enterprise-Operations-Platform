export const InvWarehouseZoneTypeDefs = `
  type InvWarehouseZone {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getInvWarehouseZone(id: ID!): InvWarehouseZone
    listInvWarehouseZones(tenantId: String!): [InvWarehouseZone!]!
  }
`;

export const InvWarehouseZoneResolvers = {
  Query: {
    getInvWarehouseZone: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "InvWarehouseZone", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listInvWarehouseZones: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "InvWarehouseZone", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

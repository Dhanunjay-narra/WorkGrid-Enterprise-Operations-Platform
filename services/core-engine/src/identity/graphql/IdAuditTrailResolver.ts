export const IdAuditTrailTypeDefs = `
  type IdAuditTrail {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdAuditTrail(id: ID!): IdAuditTrail
    listIdAuditTrails(tenantId: String!): [IdAuditTrail!]!
  }
`;

export const IdAuditTrailResolvers = {
  Query: {
    getIdAuditTrail: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdAuditTrail", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdAuditTrails: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdAuditTrail", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

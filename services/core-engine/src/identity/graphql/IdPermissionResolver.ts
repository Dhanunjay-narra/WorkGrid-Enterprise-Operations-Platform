export const IdPermissionTypeDefs = `
  type IdPermission {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdPermission(id: ID!): IdPermission
    listIdPermissions(tenantId: String!): [IdPermission!]!
  }
`;

export const IdPermissionResolvers = {
  Query: {
    getIdPermission: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdPermission", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdPermissions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdPermission", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

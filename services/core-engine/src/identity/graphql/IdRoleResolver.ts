export const IdRoleTypeDefs = `
  type IdRole {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdRole(id: ID!): IdRole
    listIdRoles(tenantId: String!): [IdRole!]!
  }
`;

export const IdRoleResolvers = {
  Query: {
    getIdRole: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdRole", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdRoles: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdRole", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

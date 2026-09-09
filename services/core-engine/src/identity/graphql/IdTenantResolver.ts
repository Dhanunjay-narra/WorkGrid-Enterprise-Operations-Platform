export const IdTenantTypeDefs = `
  type IdTenant {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdTenant(id: ID!): IdTenant
    listIdTenants(tenantId: String!): [IdTenant!]!
  }
`;

export const IdTenantResolvers = {
  Query: {
    getIdTenant: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdTenant", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdTenants: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdTenant", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

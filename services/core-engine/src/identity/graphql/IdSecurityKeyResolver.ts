export const IdSecurityKeyTypeDefs = `
  type IdSecurityKey {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdSecurityKey(id: ID!): IdSecurityKey
    listIdSecurityKeys(tenantId: String!): [IdSecurityKey!]!
  }
`;

export const IdSecurityKeyResolvers = {
  Query: {
    getIdSecurityKey: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdSecurityKey", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdSecurityKeys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdSecurityKey", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

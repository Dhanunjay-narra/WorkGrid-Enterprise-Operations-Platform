export const IdUserTypeDefs = `
  type IdUser {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdUser(id: ID!): IdUser
    listIdUsers(tenantId: String!): [IdUser!]!
  }
`;

export const IdUserResolvers = {
  Query: {
    getIdUser: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdUser", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdUsers: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdUser", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

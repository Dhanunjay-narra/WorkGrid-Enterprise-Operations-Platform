export const IdGroupMembershipTypeDefs = `
  type IdGroupMembership {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdGroupMembership(id: ID!): IdGroupMembership
    listIdGroupMemberships(tenantId: String!): [IdGroupMembership!]!
  }
`;

export const IdGroupMembershipResolvers = {
  Query: {
    getIdGroupMembership: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdGroupMembership", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdGroupMemberships: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdGroupMembership", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

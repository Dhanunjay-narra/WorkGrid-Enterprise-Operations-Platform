export const IdPolicyTypeDefs = `
  type IdPolicy {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getIdPolicy(id: ID!): IdPolicy
    listIdPolicys(tenantId: String!): [IdPolicy!]!
  }
`;

export const IdPolicyResolvers = {
  Query: {
    getIdPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "IdPolicy", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listIdPolicys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "IdPolicy", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

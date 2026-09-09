export const SecSecurityPolicyTypeDefs = `
  type SecSecurityPolicy {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getSecSecurityPolicy(id: ID!): SecSecurityPolicy
    listSecSecurityPolicys(tenantId: String!): [SecSecurityPolicy!]!
  }
`;

export const SecSecurityPolicyResolvers = {
  Query: {
    getSecSecurityPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "SecSecurityPolicy", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listSecSecurityPolicys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "SecSecurityPolicy", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

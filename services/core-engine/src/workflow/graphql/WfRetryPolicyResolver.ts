export const WfRetryPolicyTypeDefs = `
  type WfRetryPolicy {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getWfRetryPolicy(id: ID!): WfRetryPolicy
    listWfRetryPolicys(tenantId: String!): [WfRetryPolicy!]!
  }
`;

export const WfRetryPolicyResolvers = {
  Query: {
    getWfRetryPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "WfRetryPolicy", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listWfRetryPolicys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "WfRetryPolicy", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

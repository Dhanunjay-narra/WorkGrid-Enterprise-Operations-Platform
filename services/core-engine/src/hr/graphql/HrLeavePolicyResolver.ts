export const HrLeavePolicyTypeDefs = `
  type HrLeavePolicy {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getHrLeavePolicy(id: ID!): HrLeavePolicy
    listHrLeavePolicys(tenantId: String!): [HrLeavePolicy!]!
  }
`;

export const HrLeavePolicyResolvers = {
  Query: {
    getHrLeavePolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "HrLeavePolicy", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listHrLeavePolicys: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "HrLeavePolicy", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

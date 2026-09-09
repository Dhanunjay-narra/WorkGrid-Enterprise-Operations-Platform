export const WfApprovalDecisionTypeDefs = `
  type WfApprovalDecision {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getWfApprovalDecision(id: ID!): WfApprovalDecision
    listWfApprovalDecisions(tenantId: String!): [WfApprovalDecision!]!
  }
`;

export const WfApprovalDecisionResolvers = {
  Query: {
    getWfApprovalDecision: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "WfApprovalDecision", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listWfApprovalDecisions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "WfApprovalDecision", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

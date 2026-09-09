export const WfApprovalTaskTypeDefs = `
  type WfApprovalTask {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getWfApprovalTask(id: ID!): WfApprovalTask
    listWfApprovalTasks(tenantId: String!): [WfApprovalTask!]!
  }
`;

export const WfApprovalTaskResolvers = {
  Query: {
    getWfApprovalTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "WfApprovalTask", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listWfApprovalTasks: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "WfApprovalTask", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

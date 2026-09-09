export const WfWorkflowExecutionTypeDefs = `
  type WfWorkflowExecution {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getWfWorkflowExecution(id: ID!): WfWorkflowExecution
    listWfWorkflowExecutions(tenantId: String!): [WfWorkflowExecution!]!
  }
`;

export const WfWorkflowExecutionResolvers = {
  Query: {
    getWfWorkflowExecution: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "WfWorkflowExecution", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listWfWorkflowExecutions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "WfWorkflowExecution", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

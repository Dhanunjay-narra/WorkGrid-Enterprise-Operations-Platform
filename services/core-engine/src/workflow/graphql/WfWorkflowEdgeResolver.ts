export const WfWorkflowEdgeTypeDefs = `
  type WfWorkflowEdge {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getWfWorkflowEdge(id: ID!): WfWorkflowEdge
    listWfWorkflowEdges(tenantId: String!): [WfWorkflowEdge!]!
  }
`;

export const WfWorkflowEdgeResolvers = {
  Query: {
    getWfWorkflowEdge: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "WfWorkflowEdge", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listWfWorkflowEdges: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "WfWorkflowEdge", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

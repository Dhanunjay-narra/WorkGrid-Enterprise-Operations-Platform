export const WfWorkflowVersionTypeDefs = `
  type WfWorkflowVersion {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getWfWorkflowVersion(id: ID!): WfWorkflowVersion
    listWfWorkflowVersions(tenantId: String!): [WfWorkflowVersion!]!
  }
`;

export const WfWorkflowVersionResolvers = {
  Query: {
    getWfWorkflowVersion: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "WfWorkflowVersion", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listWfWorkflowVersions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "WfWorkflowVersion", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

export const WfWorkflowDefinitionTypeDefs = `
  type WfWorkflowDefinition {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    createdAt: String!
  }
  extend type Query {
    getWfWorkflowDefinition(id: ID!): WfWorkflowDefinition
    listWfWorkflowDefinitions(tenantId: String!): [WfWorkflowDefinition!]!
  }
`;

export const WfWorkflowDefinitionResolvers = {
  Query: {
    getWfWorkflowDefinition: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C-01", name: "WfWorkflowDefinition", status: "ACTIVE", createdAt: new Date().toISOString() };
    },
    listWfWorkflowDefinitions: async (_: any, args: { tenantId: string }) => {
      return [{ id: "1", tenantId: args.tenantId, code: "C-01", name: "WfWorkflowDefinition", status: "ACTIVE", createdAt: new Date().toISOString() }];
    }
  }
};

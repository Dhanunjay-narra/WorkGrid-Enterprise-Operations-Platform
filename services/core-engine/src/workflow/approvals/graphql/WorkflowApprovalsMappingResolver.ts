export const WorkflowApprovalsMappingGqlTypeDefs = `
  type WorkflowApprovalsMapping {
    id: ID!
    tenantId: String!
    code: String!
    name: String!
    status: String!
    version: Int!
    createdAt: String!
    updatedAt: String!
  }

  extend type Query {
    getWorkflowApprovalsMapping(id: ID!): WorkflowApprovalsMapping
    listWorkflowApprovalsMappings(tenantId: String!, limit: Int): [WorkflowApprovalsMapping!]!
  }

  extend type Mutation {
    createWorkflowApprovalsMapping(tenantId: String!, code: String!, name: String!): WorkflowApprovalsMapping!
    deleteWorkflowApprovalsMapping(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsMappingGqlResolvers = {
  Query: {
    getWorkflowApprovalsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

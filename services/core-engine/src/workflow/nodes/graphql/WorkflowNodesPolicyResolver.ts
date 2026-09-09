export const WorkflowNodesPolicyGqlTypeDefs = `
  type WorkflowNodesPolicy {
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
    getWorkflowNodesPolicy(id: ID!): WorkflowNodesPolicy
    listWorkflowNodesPolicys(tenantId: String!, limit: Int): [WorkflowNodesPolicy!]!
  }

  extend type Mutation {
    createWorkflowNodesPolicy(tenantId: String!, code: String!, name: String!): WorkflowNodesPolicy!
    deleteWorkflowNodesPolicy(id: ID!): Boolean!
  }
`;

export const WorkflowNodesPolicyGqlResolvers = {
  Query: {
    getWorkflowNodesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

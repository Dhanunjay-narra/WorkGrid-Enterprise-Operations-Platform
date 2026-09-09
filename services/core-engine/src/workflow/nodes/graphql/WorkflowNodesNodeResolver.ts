export const WorkflowNodesNodeGqlTypeDefs = `
  type WorkflowNodesNode {
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
    getWorkflowNodesNode(id: ID!): WorkflowNodesNode
    listWorkflowNodesNodes(tenantId: String!, limit: Int): [WorkflowNodesNode!]!
  }

  extend type Mutation {
    createWorkflowNodesNode(tenantId: String!, code: String!, name: String!): WorkflowNodesNode!
    deleteWorkflowNodesNode(id: ID!): Boolean!
  }
`;

export const WorkflowNodesNodeGqlResolvers = {
  Query: {
    getWorkflowNodesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

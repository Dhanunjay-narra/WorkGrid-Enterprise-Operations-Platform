export const WorkflowExecutionsNodeGqlTypeDefs = `
  type WorkflowExecutionsNode {
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
    getWorkflowExecutionsNode(id: ID!): WorkflowExecutionsNode
    listWorkflowExecutionsNodes(tenantId: String!, limit: Int): [WorkflowExecutionsNode!]!
  }

  extend type Mutation {
    createWorkflowExecutionsNode(tenantId: String!, code: String!, name: String!): WorkflowExecutionsNode!
    deleteWorkflowExecutionsNode(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsNodeGqlResolvers = {
  Query: {
    getWorkflowExecutionsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

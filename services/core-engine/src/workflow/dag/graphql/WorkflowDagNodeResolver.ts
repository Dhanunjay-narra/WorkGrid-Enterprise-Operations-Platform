export const WorkflowDagNodeGqlTypeDefs = `
  type WorkflowDagNode {
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
    getWorkflowDagNode(id: ID!): WorkflowDagNode
    listWorkflowDagNodes(tenantId: String!, limit: Int): [WorkflowDagNode!]!
  }

  extend type Mutation {
    createWorkflowDagNode(tenantId: String!, code: String!, name: String!): WorkflowDagNode!
    deleteWorkflowDagNode(id: ID!): Boolean!
  }
`;

export const WorkflowDagNodeGqlResolvers = {
  Query: {
    getWorkflowDagNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

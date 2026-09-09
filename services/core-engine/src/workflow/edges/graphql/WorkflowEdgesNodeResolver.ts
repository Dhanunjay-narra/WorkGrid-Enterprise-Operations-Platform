export const WorkflowEdgesNodeGqlTypeDefs = `
  type WorkflowEdgesNode {
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
    getWorkflowEdgesNode(id: ID!): WorkflowEdgesNode
    listWorkflowEdgesNodes(tenantId: String!, limit: Int): [WorkflowEdgesNode!]!
  }

  extend type Mutation {
    createWorkflowEdgesNode(tenantId: String!, code: String!, name: String!): WorkflowEdgesNode!
    deleteWorkflowEdgesNode(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesNodeGqlResolvers = {
  Query: {
    getWorkflowEdgesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

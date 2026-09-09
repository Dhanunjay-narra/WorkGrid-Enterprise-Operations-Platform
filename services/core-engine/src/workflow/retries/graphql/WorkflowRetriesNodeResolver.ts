export const WorkflowRetriesNodeGqlTypeDefs = `
  type WorkflowRetriesNode {
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
    getWorkflowRetriesNode(id: ID!): WorkflowRetriesNode
    listWorkflowRetriesNodes(tenantId: String!, limit: Int): [WorkflowRetriesNode!]!
  }

  extend type Mutation {
    createWorkflowRetriesNode(tenantId: String!, code: String!, name: String!): WorkflowRetriesNode!
    deleteWorkflowRetriesNode(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesNodeGqlResolvers = {
  Query: {
    getWorkflowRetriesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

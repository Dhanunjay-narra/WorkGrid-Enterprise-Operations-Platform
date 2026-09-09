export const WorkflowVariablesNodeGqlTypeDefs = `
  type WorkflowVariablesNode {
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
    getWorkflowVariablesNode(id: ID!): WorkflowVariablesNode
    listWorkflowVariablesNodes(tenantId: String!, limit: Int): [WorkflowVariablesNode!]!
  }

  extend type Mutation {
    createWorkflowVariablesNode(tenantId: String!, code: String!, name: String!): WorkflowVariablesNode!
    deleteWorkflowVariablesNode(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesNodeGqlResolvers = {
  Query: {
    getWorkflowVariablesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

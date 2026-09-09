export const WorkflowCronsNodeGqlTypeDefs = `
  type WorkflowCronsNode {
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
    getWorkflowCronsNode(id: ID!): WorkflowCronsNode
    listWorkflowCronsNodes(tenantId: String!, limit: Int): [WorkflowCronsNode!]!
  }

  extend type Mutation {
    createWorkflowCronsNode(tenantId: String!, code: String!, name: String!): WorkflowCronsNode!
    deleteWorkflowCronsNode(id: ID!): Boolean!
  }
`;

export const WorkflowCronsNodeGqlResolvers = {
  Query: {
    getWorkflowCronsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

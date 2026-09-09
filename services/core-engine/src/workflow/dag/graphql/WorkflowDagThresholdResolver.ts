export const WorkflowDagThresholdGqlTypeDefs = `
  type WorkflowDagThreshold {
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
    getWorkflowDagThreshold(id: ID!): WorkflowDagThreshold
    listWorkflowDagThresholds(tenantId: String!, limit: Int): [WorkflowDagThreshold!]!
  }

  extend type Mutation {
    createWorkflowDagThreshold(tenantId: String!, code: String!, name: String!): WorkflowDagThreshold!
    deleteWorkflowDagThreshold(id: ID!): Boolean!
  }
`;

export const WorkflowDagThresholdGqlResolvers = {
  Query: {
    getWorkflowDagThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

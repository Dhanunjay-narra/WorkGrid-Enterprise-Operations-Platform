export const WorkflowCronsThresholdGqlTypeDefs = `
  type WorkflowCronsThreshold {
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
    getWorkflowCronsThreshold(id: ID!): WorkflowCronsThreshold
    listWorkflowCronsThresholds(tenantId: String!, limit: Int): [WorkflowCronsThreshold!]!
  }

  extend type Mutation {
    createWorkflowCronsThreshold(tenantId: String!, code: String!, name: String!): WorkflowCronsThreshold!
    deleteWorkflowCronsThreshold(id: ID!): Boolean!
  }
`;

export const WorkflowCronsThresholdGqlResolvers = {
  Query: {
    getWorkflowCronsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

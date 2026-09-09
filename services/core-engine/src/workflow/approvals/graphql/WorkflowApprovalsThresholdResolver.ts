export const WorkflowApprovalsThresholdGqlTypeDefs = `
  type WorkflowApprovalsThreshold {
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
    getWorkflowApprovalsThreshold(id: ID!): WorkflowApprovalsThreshold
    listWorkflowApprovalsThresholds(tenantId: String!, limit: Int): [WorkflowApprovalsThreshold!]!
  }

  extend type Mutation {
    createWorkflowApprovalsThreshold(tenantId: String!, code: String!, name: String!): WorkflowApprovalsThreshold!
    deleteWorkflowApprovalsThreshold(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsThresholdGqlResolvers = {
  Query: {
    getWorkflowApprovalsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

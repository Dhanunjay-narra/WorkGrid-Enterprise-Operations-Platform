export const WorkflowCronsPolicyGqlTypeDefs = `
  type WorkflowCronsPolicy {
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
    getWorkflowCronsPolicy(id: ID!): WorkflowCronsPolicy
    listWorkflowCronsPolicys(tenantId: String!, limit: Int): [WorkflowCronsPolicy!]!
  }

  extend type Mutation {
    createWorkflowCronsPolicy(tenantId: String!, code: String!, name: String!): WorkflowCronsPolicy!
    deleteWorkflowCronsPolicy(id: ID!): Boolean!
  }
`;

export const WorkflowCronsPolicyGqlResolvers = {
  Query: {
    getWorkflowCronsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

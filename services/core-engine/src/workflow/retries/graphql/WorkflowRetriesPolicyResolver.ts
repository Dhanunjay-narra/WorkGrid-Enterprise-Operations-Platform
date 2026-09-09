export const WorkflowRetriesPolicyGqlTypeDefs = `
  type WorkflowRetriesPolicy {
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
    getWorkflowRetriesPolicy(id: ID!): WorkflowRetriesPolicy
    listWorkflowRetriesPolicys(tenantId: String!, limit: Int): [WorkflowRetriesPolicy!]!
  }

  extend type Mutation {
    createWorkflowRetriesPolicy(tenantId: String!, code: String!, name: String!): WorkflowRetriesPolicy!
    deleteWorkflowRetriesPolicy(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesPolicyGqlResolvers = {
  Query: {
    getWorkflowRetriesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const WorkflowDagPolicyGqlTypeDefs = `
  type WorkflowDagPolicy {
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
    getWorkflowDagPolicy(id: ID!): WorkflowDagPolicy
    listWorkflowDagPolicys(tenantId: String!, limit: Int): [WorkflowDagPolicy!]!
  }

  extend type Mutation {
    createWorkflowDagPolicy(tenantId: String!, code: String!, name: String!): WorkflowDagPolicy!
    deleteWorkflowDagPolicy(id: ID!): Boolean!
  }
`;

export const WorkflowDagPolicyGqlResolvers = {
  Query: {
    getWorkflowDagPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

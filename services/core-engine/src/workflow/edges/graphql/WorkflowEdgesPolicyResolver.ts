export const WorkflowEdgesPolicyGqlTypeDefs = `
  type WorkflowEdgesPolicy {
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
    getWorkflowEdgesPolicy(id: ID!): WorkflowEdgesPolicy
    listWorkflowEdgesPolicys(tenantId: String!, limit: Int): [WorkflowEdgesPolicy!]!
  }

  extend type Mutation {
    createWorkflowEdgesPolicy(tenantId: String!, code: String!, name: String!): WorkflowEdgesPolicy!
    deleteWorkflowEdgesPolicy(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesPolicyGqlResolvers = {
  Query: {
    getWorkflowEdgesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

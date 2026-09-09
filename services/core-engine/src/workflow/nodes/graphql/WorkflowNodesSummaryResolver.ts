export const WorkflowNodesSummaryGqlTypeDefs = `
  type WorkflowNodesSummary {
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
    getWorkflowNodesSummary(id: ID!): WorkflowNodesSummary
    listWorkflowNodesSummarys(tenantId: String!, limit: Int): [WorkflowNodesSummary!]!
  }

  extend type Mutation {
    createWorkflowNodesSummary(tenantId: String!, code: String!, name: String!): WorkflowNodesSummary!
    deleteWorkflowNodesSummary(id: ID!): Boolean!
  }
`;

export const WorkflowNodesSummaryGqlResolvers = {
  Query: {
    getWorkflowNodesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

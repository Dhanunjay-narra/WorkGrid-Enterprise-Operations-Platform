export const WorkflowRetriesSummaryGqlTypeDefs = `
  type WorkflowRetriesSummary {
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
    getWorkflowRetriesSummary(id: ID!): WorkflowRetriesSummary
    listWorkflowRetriesSummarys(tenantId: String!, limit: Int): [WorkflowRetriesSummary!]!
  }

  extend type Mutation {
    createWorkflowRetriesSummary(tenantId: String!, code: String!, name: String!): WorkflowRetriesSummary!
    deleteWorkflowRetriesSummary(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesSummaryGqlResolvers = {
  Query: {
    getWorkflowRetriesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

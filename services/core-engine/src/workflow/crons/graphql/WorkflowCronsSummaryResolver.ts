export const WorkflowCronsSummaryGqlTypeDefs = `
  type WorkflowCronsSummary {
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
    getWorkflowCronsSummary(id: ID!): WorkflowCronsSummary
    listWorkflowCronsSummarys(tenantId: String!, limit: Int): [WorkflowCronsSummary!]!
  }

  extend type Mutation {
    createWorkflowCronsSummary(tenantId: String!, code: String!, name: String!): WorkflowCronsSummary!
    deleteWorkflowCronsSummary(id: ID!): Boolean!
  }
`;

export const WorkflowCronsSummaryGqlResolvers = {
  Query: {
    getWorkflowCronsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

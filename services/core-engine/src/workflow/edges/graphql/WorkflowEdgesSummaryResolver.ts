export const WorkflowEdgesSummaryGqlTypeDefs = `
  type WorkflowEdgesSummary {
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
    getWorkflowEdgesSummary(id: ID!): WorkflowEdgesSummary
    listWorkflowEdgesSummarys(tenantId: String!, limit: Int): [WorkflowEdgesSummary!]!
  }

  extend type Mutation {
    createWorkflowEdgesSummary(tenantId: String!, code: String!, name: String!): WorkflowEdgesSummary!
    deleteWorkflowEdgesSummary(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesSummaryGqlResolvers = {
  Query: {
    getWorkflowEdgesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const WorkflowVariablesSummaryGqlTypeDefs = `
  type WorkflowVariablesSummary {
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
    getWorkflowVariablesSummary(id: ID!): WorkflowVariablesSummary
    listWorkflowVariablesSummarys(tenantId: String!, limit: Int): [WorkflowVariablesSummary!]!
  }

  extend type Mutation {
    createWorkflowVariablesSummary(tenantId: String!, code: String!, name: String!): WorkflowVariablesSummary!
    deleteWorkflowVariablesSummary(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesSummaryGqlResolvers = {
  Query: {
    getWorkflowVariablesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

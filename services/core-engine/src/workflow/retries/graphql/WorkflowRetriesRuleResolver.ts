export const WorkflowRetriesRuleGqlTypeDefs = `
  type WorkflowRetriesRule {
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
    getWorkflowRetriesRule(id: ID!): WorkflowRetriesRule
    listWorkflowRetriesRules(tenantId: String!, limit: Int): [WorkflowRetriesRule!]!
  }

  extend type Mutation {
    createWorkflowRetriesRule(tenantId: String!, code: String!, name: String!): WorkflowRetriesRule!
    deleteWorkflowRetriesRule(id: ID!): Boolean!
  }
`;

export const WorkflowRetriesRuleGqlResolvers = {
  Query: {
    getWorkflowRetriesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowRetriesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

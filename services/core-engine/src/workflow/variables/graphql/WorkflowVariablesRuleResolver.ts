export const WorkflowVariablesRuleGqlTypeDefs = `
  type WorkflowVariablesRule {
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
    getWorkflowVariablesRule(id: ID!): WorkflowVariablesRule
    listWorkflowVariablesRules(tenantId: String!, limit: Int): [WorkflowVariablesRule!]!
  }

  extend type Mutation {
    createWorkflowVariablesRule(tenantId: String!, code: String!, name: String!): WorkflowVariablesRule!
    deleteWorkflowVariablesRule(id: ID!): Boolean!
  }
`;

export const WorkflowVariablesRuleGqlResolvers = {
  Query: {
    getWorkflowVariablesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowVariablesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

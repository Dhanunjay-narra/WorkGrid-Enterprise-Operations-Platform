export const WorkflowEdgesRuleGqlTypeDefs = `
  type WorkflowEdgesRule {
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
    getWorkflowEdgesRule(id: ID!): WorkflowEdgesRule
    listWorkflowEdgesRules(tenantId: String!, limit: Int): [WorkflowEdgesRule!]!
  }

  extend type Mutation {
    createWorkflowEdgesRule(tenantId: String!, code: String!, name: String!): WorkflowEdgesRule!
    deleteWorkflowEdgesRule(id: ID!): Boolean!
  }
`;

export const WorkflowEdgesRuleGqlResolvers = {
  Query: {
    getWorkflowEdgesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowEdgesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

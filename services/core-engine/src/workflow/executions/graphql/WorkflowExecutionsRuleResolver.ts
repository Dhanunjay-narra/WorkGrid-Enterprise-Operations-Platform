export const WorkflowExecutionsRuleGqlTypeDefs = `
  type WorkflowExecutionsRule {
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
    getWorkflowExecutionsRule(id: ID!): WorkflowExecutionsRule
    listWorkflowExecutionsRules(tenantId: String!, limit: Int): [WorkflowExecutionsRule!]!
  }

  extend type Mutation {
    createWorkflowExecutionsRule(tenantId: String!, code: String!, name: String!): WorkflowExecutionsRule!
    deleteWorkflowExecutionsRule(id: ID!): Boolean!
  }
`;

export const WorkflowExecutionsRuleGqlResolvers = {
  Query: {
    getWorkflowExecutionsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowExecutionsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const WorkflowApprovalsRuleGqlTypeDefs = `
  type WorkflowApprovalsRule {
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
    getWorkflowApprovalsRule(id: ID!): WorkflowApprovalsRule
    listWorkflowApprovalsRules(tenantId: String!, limit: Int): [WorkflowApprovalsRule!]!
  }

  extend type Mutation {
    createWorkflowApprovalsRule(tenantId: String!, code: String!, name: String!): WorkflowApprovalsRule!
    deleteWorkflowApprovalsRule(id: ID!): Boolean!
  }
`;

export const WorkflowApprovalsRuleGqlResolvers = {
  Query: {
    getWorkflowApprovalsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowApprovalsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

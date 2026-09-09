export const WorkflowDagRuleGqlTypeDefs = `
  type WorkflowDagRule {
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
    getWorkflowDagRule(id: ID!): WorkflowDagRule
    listWorkflowDagRules(tenantId: String!, limit: Int): [WorkflowDagRule!]!
  }

  extend type Mutation {
    createWorkflowDagRule(tenantId: String!, code: String!, name: String!): WorkflowDagRule!
    deleteWorkflowDagRule(id: ID!): Boolean!
  }
`;

export const WorkflowDagRuleGqlResolvers = {
  Query: {
    getWorkflowDagRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowDagRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

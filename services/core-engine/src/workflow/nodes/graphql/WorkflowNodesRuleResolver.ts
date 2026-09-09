export const WorkflowNodesRuleGqlTypeDefs = `
  type WorkflowNodesRule {
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
    getWorkflowNodesRule(id: ID!): WorkflowNodesRule
    listWorkflowNodesRules(tenantId: String!, limit: Int): [WorkflowNodesRule!]!
  }

  extend type Mutation {
    createWorkflowNodesRule(tenantId: String!, code: String!, name: String!): WorkflowNodesRule!
    deleteWorkflowNodesRule(id: ID!): Boolean!
  }
`;

export const WorkflowNodesRuleGqlResolvers = {
  Query: {
    getWorkflowNodesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowNodesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const WorkflowCronsRuleGqlTypeDefs = `
  type WorkflowCronsRule {
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
    getWorkflowCronsRule(id: ID!): WorkflowCronsRule
    listWorkflowCronsRules(tenantId: String!, limit: Int): [WorkflowCronsRule!]!
  }

  extend type Mutation {
    createWorkflowCronsRule(tenantId: String!, code: String!, name: String!): WorkflowCronsRule!
    deleteWorkflowCronsRule(id: ID!): Boolean!
  }
`;

export const WorkflowCronsRuleGqlResolvers = {
  Query: {
    getWorkflowCronsRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "WorkflowCronsRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

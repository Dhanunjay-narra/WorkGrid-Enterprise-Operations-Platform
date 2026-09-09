export const ProjectTasksRuleGqlTypeDefs = `
  type ProjectTasksRule {
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
    getProjectTasksRule(id: ID!): ProjectTasksRule
    listProjectTasksRules(tenantId: String!, limit: Int): [ProjectTasksRule!]!
  }

  extend type Mutation {
    createProjectTasksRule(tenantId: String!, code: String!, name: String!): ProjectTasksRule!
    deleteProjectTasksRule(id: ID!): Boolean!
  }
`;

export const ProjectTasksRuleGqlResolvers = {
  Query: {
    getProjectTasksRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

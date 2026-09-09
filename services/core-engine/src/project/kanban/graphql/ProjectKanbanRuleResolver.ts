export const ProjectKanbanRuleGqlTypeDefs = `
  type ProjectKanbanRule {
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
    getProjectKanbanRule(id: ID!): ProjectKanbanRule
    listProjectKanbanRules(tenantId: String!, limit: Int): [ProjectKanbanRule!]!
  }

  extend type Mutation {
    createProjectKanbanRule(tenantId: String!, code: String!, name: String!): ProjectKanbanRule!
    deleteProjectKanbanRule(id: ID!): Boolean!
  }
`;

export const ProjectKanbanRuleGqlResolvers = {
  Query: {
    getProjectKanbanRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

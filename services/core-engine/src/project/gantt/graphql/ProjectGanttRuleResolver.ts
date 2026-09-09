export const ProjectGanttRuleGqlTypeDefs = `
  type ProjectGanttRule {
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
    getProjectGanttRule(id: ID!): ProjectGanttRule
    listProjectGanttRules(tenantId: String!, limit: Int): [ProjectGanttRule!]!
  }

  extend type Mutation {
    createProjectGanttRule(tenantId: String!, code: String!, name: String!): ProjectGanttRule!
    deleteProjectGanttRule(id: ID!): Boolean!
  }
`;

export const ProjectGanttRuleGqlResolvers = {
  Query: {
    getProjectGanttRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const ProjectWorkspacesRuleGqlTypeDefs = `
  type ProjectWorkspacesRule {
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
    getProjectWorkspacesRule(id: ID!): ProjectWorkspacesRule
    listProjectWorkspacesRules(tenantId: String!, limit: Int): [ProjectWorkspacesRule!]!
  }

  extend type Mutation {
    createProjectWorkspacesRule(tenantId: String!, code: String!, name: String!): ProjectWorkspacesRule!
    deleteProjectWorkspacesRule(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesRuleGqlResolvers = {
  Query: {
    getProjectWorkspacesRule: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesRule", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

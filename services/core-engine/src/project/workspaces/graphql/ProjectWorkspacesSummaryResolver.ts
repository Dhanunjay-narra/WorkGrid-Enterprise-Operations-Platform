export const ProjectWorkspacesSummaryGqlTypeDefs = `
  type ProjectWorkspacesSummary {
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
    getProjectWorkspacesSummary(id: ID!): ProjectWorkspacesSummary
    listProjectWorkspacesSummarys(tenantId: String!, limit: Int): [ProjectWorkspacesSummary!]!
  }

  extend type Mutation {
    createProjectWorkspacesSummary(tenantId: String!, code: String!, name: String!): ProjectWorkspacesSummary!
    deleteProjectWorkspacesSummary(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesSummaryGqlResolvers = {
  Query: {
    getProjectWorkspacesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

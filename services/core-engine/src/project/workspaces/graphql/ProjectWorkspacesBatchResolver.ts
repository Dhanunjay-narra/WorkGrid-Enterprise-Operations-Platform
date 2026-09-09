export const ProjectWorkspacesBatchGqlTypeDefs = `
  type ProjectWorkspacesBatch {
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
    getProjectWorkspacesBatch(id: ID!): ProjectWorkspacesBatch
    listProjectWorkspacesBatchs(tenantId: String!, limit: Int): [ProjectWorkspacesBatch!]!
  }

  extend type Mutation {
    createProjectWorkspacesBatch(tenantId: String!, code: String!, name: String!): ProjectWorkspacesBatch!
    deleteProjectWorkspacesBatch(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesBatchGqlResolvers = {
  Query: {
    getProjectWorkspacesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

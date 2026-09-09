export const ProjectWorkspacesThresholdGqlTypeDefs = `
  type ProjectWorkspacesThreshold {
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
    getProjectWorkspacesThreshold(id: ID!): ProjectWorkspacesThreshold
    listProjectWorkspacesThresholds(tenantId: String!, limit: Int): [ProjectWorkspacesThreshold!]!
  }

  extend type Mutation {
    createProjectWorkspacesThreshold(tenantId: String!, code: String!, name: String!): ProjectWorkspacesThreshold!
    deleteProjectWorkspacesThreshold(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesThresholdGqlResolvers = {
  Query: {
    getProjectWorkspacesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

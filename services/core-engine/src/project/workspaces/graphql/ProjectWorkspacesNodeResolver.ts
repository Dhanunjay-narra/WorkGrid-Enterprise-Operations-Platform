export const ProjectWorkspacesNodeGqlTypeDefs = `
  type ProjectWorkspacesNode {
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
    getProjectWorkspacesNode(id: ID!): ProjectWorkspacesNode
    listProjectWorkspacesNodes(tenantId: String!, limit: Int): [ProjectWorkspacesNode!]!
  }

  extend type Mutation {
    createProjectWorkspacesNode(tenantId: String!, code: String!, name: String!): ProjectWorkspacesNode!
    deleteProjectWorkspacesNode(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesNodeGqlResolvers = {
  Query: {
    getProjectWorkspacesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

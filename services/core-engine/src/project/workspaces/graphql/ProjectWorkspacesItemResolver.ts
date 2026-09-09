export const ProjectWorkspacesItemGqlTypeDefs = `
  type ProjectWorkspacesItem {
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
    getProjectWorkspacesItem(id: ID!): ProjectWorkspacesItem
    listProjectWorkspacesItems(tenantId: String!, limit: Int): [ProjectWorkspacesItem!]!
  }

  extend type Mutation {
    createProjectWorkspacesItem(tenantId: String!, code: String!, name: String!): ProjectWorkspacesItem!
    deleteProjectWorkspacesItem(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesItemGqlResolvers = {
  Query: {
    getProjectWorkspacesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

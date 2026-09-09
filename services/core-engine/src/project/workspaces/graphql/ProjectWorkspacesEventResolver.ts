export const ProjectWorkspacesEventGqlTypeDefs = `
  type ProjectWorkspacesEvent {
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
    getProjectWorkspacesEvent(id: ID!): ProjectWorkspacesEvent
    listProjectWorkspacesEvents(tenantId: String!, limit: Int): [ProjectWorkspacesEvent!]!
  }

  extend type Mutation {
    createProjectWorkspacesEvent(tenantId: String!, code: String!, name: String!): ProjectWorkspacesEvent!
    deleteProjectWorkspacesEvent(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesEventGqlResolvers = {
  Query: {
    getProjectWorkspacesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

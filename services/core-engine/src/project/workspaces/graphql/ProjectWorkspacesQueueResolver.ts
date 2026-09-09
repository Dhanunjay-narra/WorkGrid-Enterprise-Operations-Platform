export const ProjectWorkspacesQueueGqlTypeDefs = `
  type ProjectWorkspacesQueue {
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
    getProjectWorkspacesQueue(id: ID!): ProjectWorkspacesQueue
    listProjectWorkspacesQueues(tenantId: String!, limit: Int): [ProjectWorkspacesQueue!]!
  }

  extend type Mutation {
    createProjectWorkspacesQueue(tenantId: String!, code: String!, name: String!): ProjectWorkspacesQueue!
    deleteProjectWorkspacesQueue(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesQueueGqlResolvers = {
  Query: {
    getProjectWorkspacesQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

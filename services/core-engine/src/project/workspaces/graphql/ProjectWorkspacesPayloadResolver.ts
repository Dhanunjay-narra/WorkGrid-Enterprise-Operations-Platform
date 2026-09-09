export const ProjectWorkspacesPayloadGqlTypeDefs = `
  type ProjectWorkspacesPayload {
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
    getProjectWorkspacesPayload(id: ID!): ProjectWorkspacesPayload
    listProjectWorkspacesPayloads(tenantId: String!, limit: Int): [ProjectWorkspacesPayload!]!
  }

  extend type Mutation {
    createProjectWorkspacesPayload(tenantId: String!, code: String!, name: String!): ProjectWorkspacesPayload!
    deleteProjectWorkspacesPayload(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesPayloadGqlResolvers = {
  Query: {
    getProjectWorkspacesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

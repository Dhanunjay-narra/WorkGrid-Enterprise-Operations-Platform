export const ProjectWorkspacesStateGqlTypeDefs = `
  type ProjectWorkspacesState {
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
    getProjectWorkspacesState(id: ID!): ProjectWorkspacesState
    listProjectWorkspacesStates(tenantId: String!, limit: Int): [ProjectWorkspacesState!]!
  }

  extend type Mutation {
    createProjectWorkspacesState(tenantId: String!, code: String!, name: String!): ProjectWorkspacesState!
    deleteProjectWorkspacesState(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesStateGqlResolvers = {
  Query: {
    getProjectWorkspacesState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

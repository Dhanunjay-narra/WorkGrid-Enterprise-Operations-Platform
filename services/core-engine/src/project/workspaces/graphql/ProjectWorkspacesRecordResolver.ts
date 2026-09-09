export const ProjectWorkspacesRecordGqlTypeDefs = `
  type ProjectWorkspacesRecord {
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
    getProjectWorkspacesRecord(id: ID!): ProjectWorkspacesRecord
    listProjectWorkspacesRecords(tenantId: String!, limit: Int): [ProjectWorkspacesRecord!]!
  }

  extend type Mutation {
    createProjectWorkspacesRecord(tenantId: String!, code: String!, name: String!): ProjectWorkspacesRecord!
    deleteProjectWorkspacesRecord(id: ID!): Boolean!
  }
`;

export const ProjectWorkspacesRecordGqlResolvers = {
  Query: {
    getProjectWorkspacesRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectWorkspacesRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const ProjectTasksEntryGqlTypeDefs = `
  type ProjectTasksEntry {
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
    getProjectTasksEntry(id: ID!): ProjectTasksEntry
    listProjectTasksEntrys(tenantId: String!, limit: Int): [ProjectTasksEntry!]!
  }

  extend type Mutation {
    createProjectTasksEntry(tenantId: String!, code: String!, name: String!): ProjectTasksEntry!
    deleteProjectTasksEntry(id: ID!): Boolean!
  }
`;

export const ProjectTasksEntryGqlResolvers = {
  Query: {
    getProjectTasksEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

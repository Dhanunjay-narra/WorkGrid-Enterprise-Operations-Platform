export const ProjectSprintsEntryGqlTypeDefs = `
  type ProjectSprintsEntry {
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
    getProjectSprintsEntry(id: ID!): ProjectSprintsEntry
    listProjectSprintsEntrys(tenantId: String!, limit: Int): [ProjectSprintsEntry!]!
  }

  extend type Mutation {
    createProjectSprintsEntry(tenantId: String!, code: String!, name: String!): ProjectSprintsEntry!
    deleteProjectSprintsEntry(id: ID!): Boolean!
  }
`;

export const ProjectSprintsEntryGqlResolvers = {
  Query: {
    getProjectSprintsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectSprintsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

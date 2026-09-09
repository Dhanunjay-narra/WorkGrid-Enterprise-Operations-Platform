export const ProjectEpicsEntryGqlTypeDefs = `
  type ProjectEpicsEntry {
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
    getProjectEpicsEntry(id: ID!): ProjectEpicsEntry
    listProjectEpicsEntrys(tenantId: String!, limit: Int): [ProjectEpicsEntry!]!
  }

  extend type Mutation {
    createProjectEpicsEntry(tenantId: String!, code: String!, name: String!): ProjectEpicsEntry!
    deleteProjectEpicsEntry(id: ID!): Boolean!
  }
`;

export const ProjectEpicsEntryGqlResolvers = {
  Query: {
    getProjectEpicsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectEpicsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

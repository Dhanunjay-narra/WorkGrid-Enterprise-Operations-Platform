export const ProjectGanttEntryGqlTypeDefs = `
  type ProjectGanttEntry {
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
    getProjectGanttEntry(id: ID!): ProjectGanttEntry
    listProjectGanttEntrys(tenantId: String!, limit: Int): [ProjectGanttEntry!]!
  }

  extend type Mutation {
    createProjectGanttEntry(tenantId: String!, code: String!, name: String!): ProjectGanttEntry!
    deleteProjectGanttEntry(id: ID!): Boolean!
  }
`;

export const ProjectGanttEntryGqlResolvers = {
  Query: {
    getProjectGanttEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

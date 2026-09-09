export const ProjectKanbanRecordGqlTypeDefs = `
  type ProjectKanbanRecord {
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
    getProjectKanbanRecord(id: ID!): ProjectKanbanRecord
    listProjectKanbanRecords(tenantId: String!, limit: Int): [ProjectKanbanRecord!]!
  }

  extend type Mutation {
    createProjectKanbanRecord(tenantId: String!, code: String!, name: String!): ProjectKanbanRecord!
    deleteProjectKanbanRecord(id: ID!): Boolean!
  }
`;

export const ProjectKanbanRecordGqlResolvers = {
  Query: {
    getProjectKanbanRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectKanbanRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const ProjectGanttRecordGqlTypeDefs = `
  type ProjectGanttRecord {
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
    getProjectGanttRecord(id: ID!): ProjectGanttRecord
    listProjectGanttRecords(tenantId: String!, limit: Int): [ProjectGanttRecord!]!
  }

  extend type Mutation {
    createProjectGanttRecord(tenantId: String!, code: String!, name: String!): ProjectGanttRecord!
    deleteProjectGanttRecord(id: ID!): Boolean!
  }
`;

export const ProjectGanttRecordGqlResolvers = {
  Query: {
    getProjectGanttRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectGanttRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

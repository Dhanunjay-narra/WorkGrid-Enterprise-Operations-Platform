export const ProjectTasksRecordGqlTypeDefs = `
  type ProjectTasksRecord {
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
    getProjectTasksRecord(id: ID!): ProjectTasksRecord
    listProjectTasksRecords(tenantId: String!, limit: Int): [ProjectTasksRecord!]!
  }

  extend type Mutation {
    createProjectTasksRecord(tenantId: String!, code: String!, name: String!): ProjectTasksRecord!
    deleteProjectTasksRecord(id: ID!): Boolean!
  }
`;

export const ProjectTasksRecordGqlResolvers = {
  Query: {
    getProjectTasksRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ProjectTasksRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

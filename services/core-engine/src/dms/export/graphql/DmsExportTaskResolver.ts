export const DmsExportTaskGqlTypeDefs = `
  type DmsExportTask {
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
    getDmsExportTask(id: ID!): DmsExportTask
    listDmsExportTasks(tenantId: String!, limit: Int): [DmsExportTask!]!
  }

  extend type Mutation {
    createDmsExportTask(tenantId: String!, code: String!, name: String!): DmsExportTask!
    deleteDmsExportTask(id: ID!): Boolean!
  }
`;

export const DmsExportTaskGqlResolvers = {
  Query: {
    getDmsExportTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsExportTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

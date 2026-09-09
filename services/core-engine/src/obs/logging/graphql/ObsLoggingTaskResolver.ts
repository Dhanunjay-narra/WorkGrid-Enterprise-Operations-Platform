export const ObsLoggingTaskGqlTypeDefs = `
  type ObsLoggingTask {
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
    getObsLoggingTask(id: ID!): ObsLoggingTask
    listObsLoggingTasks(tenantId: String!, limit: Int): [ObsLoggingTask!]!
  }

  extend type Mutation {
    createObsLoggingTask(tenantId: String!, code: String!, name: String!): ObsLoggingTask!
    deleteObsLoggingTask(id: ID!): Boolean!
  }
`;

export const ObsLoggingTaskGqlResolvers = {
  Query: {
    getObsLoggingTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

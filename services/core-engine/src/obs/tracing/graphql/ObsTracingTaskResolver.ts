export const ObsTracingTaskGqlTypeDefs = `
  type ObsTracingTask {
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
    getObsTracingTask(id: ID!): ObsTracingTask
    listObsTracingTasks(tenantId: String!, limit: Int): [ObsTracingTask!]!
  }

  extend type Mutation {
    createObsTracingTask(tenantId: String!, code: String!, name: String!): ObsTracingTask!
    deleteObsTracingTask(id: ID!): Boolean!
  }
`;

export const ObsTracingTaskGqlResolvers = {
  Query: {
    getObsTracingTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsTracingTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const ObsProfilingTaskGqlTypeDefs = `
  type ObsProfilingTask {
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
    getObsProfilingTask(id: ID!): ObsProfilingTask
    listObsProfilingTasks(tenantId: String!, limit: Int): [ObsProfilingTask!]!
  }

  extend type Mutation {
    createObsProfilingTask(tenantId: String!, code: String!, name: String!): ObsProfilingTask!
    deleteObsProfilingTask(id: ID!): Boolean!
  }
`;

export const ObsProfilingTaskGqlResolvers = {
  Query: {
    getObsProfilingTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

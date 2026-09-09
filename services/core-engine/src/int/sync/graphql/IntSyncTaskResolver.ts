export const IntSyncTaskGqlTypeDefs = `
  type IntSyncTask {
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
    getIntSyncTask(id: ID!): IntSyncTask
    listIntSyncTasks(tenantId: String!, limit: Int): [IntSyncTask!]!
  }

  extend type Mutation {
    createIntSyncTask(tenantId: String!, code: String!, name: String!): IntSyncTask!
    deleteIntSyncTask(id: ID!): Boolean!
  }
`;

export const IntSyncTaskGqlResolvers = {
  Query: {
    getIntSyncTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

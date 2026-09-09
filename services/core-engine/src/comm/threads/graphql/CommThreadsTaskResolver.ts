export const CommThreadsTaskGqlTypeDefs = `
  type CommThreadsTask {
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
    getCommThreadsTask(id: ID!): CommThreadsTask
    listCommThreadsTasks(tenantId: String!, limit: Int): [CommThreadsTask!]!
  }

  extend type Mutation {
    createCommThreadsTask(tenantId: String!, code: String!, name: String!): CommThreadsTask!
    deleteCommThreadsTask(id: ID!): Boolean!
  }
`;

export const CommThreadsTaskGqlResolvers = {
  Query: {
    getCommThreadsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

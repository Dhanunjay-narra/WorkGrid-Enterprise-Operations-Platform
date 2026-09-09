export const CommCallsTaskGqlTypeDefs = `
  type CommCallsTask {
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
    getCommCallsTask(id: ID!): CommCallsTask
    listCommCallsTasks(tenantId: String!, limit: Int): [CommCallsTask!]!
  }

  extend type Mutation {
    createCommCallsTask(tenantId: String!, code: String!, name: String!): CommCallsTask!
    deleteCommCallsTask(id: ID!): Boolean!
  }
`;

export const CommCallsTaskGqlResolvers = {
  Query: {
    getCommCallsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

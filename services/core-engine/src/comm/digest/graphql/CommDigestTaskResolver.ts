export const CommDigestTaskGqlTypeDefs = `
  type CommDigestTask {
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
    getCommDigestTask(id: ID!): CommDigestTask
    listCommDigestTasks(tenantId: String!, limit: Int): [CommDigestTask!]!
  }

  extend type Mutation {
    createCommDigestTask(tenantId: String!, code: String!, name: String!): CommDigestTask!
    deleteCommDigestTask(id: ID!): Boolean!
  }
`;

export const CommDigestTaskGqlResolvers = {
  Query: {
    getCommDigestTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

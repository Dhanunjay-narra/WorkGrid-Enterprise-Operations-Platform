export const BiQueriesTaskGqlTypeDefs = `
  type BiQueriesTask {
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
    getBiQueriesTask(id: ID!): BiQueriesTask
    listBiQueriesTasks(tenantId: String!, limit: Int): [BiQueriesTask!]!
  }

  extend type Mutation {
    createBiQueriesTask(tenantId: String!, code: String!, name: String!): BiQueriesTask!
    deleteBiQueriesTask(id: ID!): Boolean!
  }
`;

export const BiQueriesTaskGqlResolvers = {
  Query: {
    getBiQueriesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiQueriesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const AbacTaskGqlTypeDefs = `
  type AbacTask {
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
    getAbacTask(id: ID!): AbacTask
    listAbacTasks(tenantId: String!, limit: Int): [AbacTask!]!
  }

  extend type Mutation {
    createAbacTask(tenantId: String!, code: String!, name: String!): AbacTask!
    deleteAbacTask(id: ID!): Boolean!
  }
`;

export const AbacTaskGqlResolvers = {
  Query: {
    getAbacTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

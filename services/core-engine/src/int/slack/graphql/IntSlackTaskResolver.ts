export const IntSlackTaskGqlTypeDefs = `
  type IntSlackTask {
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
    getIntSlackTask(id: ID!): IntSlackTask
    listIntSlackTasks(tenantId: String!, limit: Int): [IntSlackTask!]!
  }

  extend type Mutation {
    createIntSlackTask(tenantId: String!, code: String!, name: String!): IntSlackTask!
    deleteIntSlackTask(id: ID!): Boolean!
  }
`;

export const IntSlackTaskGqlResolvers = {
  Query: {
    getIntSlackTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

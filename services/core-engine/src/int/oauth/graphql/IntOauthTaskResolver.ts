export const IntOauthTaskGqlTypeDefs = `
  type IntOauthTask {
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
    getIntOauthTask(id: ID!): IntOauthTask
    listIntOauthTasks(tenantId: String!, limit: Int): [IntOauthTask!]!
  }

  extend type Mutation {
    createIntOauthTask(tenantId: String!, code: String!, name: String!): IntOauthTask!
    deleteIntOauthTask(id: ID!): Boolean!
  }
`;

export const IntOauthTaskGqlResolvers = {
  Query: {
    getIntOauthTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

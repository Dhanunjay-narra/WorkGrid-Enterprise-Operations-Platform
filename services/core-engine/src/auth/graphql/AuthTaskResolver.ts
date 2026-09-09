export const AuthTaskGqlTypeDefs = `
  type AuthTask {
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
    getAuthTask(id: ID!): AuthTask
    listAuthTasks(tenantId: String!, limit: Int): [AuthTask!]!
  }

  extend type Mutation {
    createAuthTask(tenantId: String!, code: String!, name: String!): AuthTask!
    deleteAuthTask(id: ID!): Boolean!
  }
`;

export const AuthTaskGqlResolvers = {
  Query: {
    getAuthTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

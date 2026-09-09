export const IdentityTaskGqlTypeDefs = `
  type IdentityTask {
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
    getIdentityTask(id: ID!): IdentityTask
    listIdentityTasks(tenantId: String!, limit: Int): [IdentityTask!]!
  }

  extend type Mutation {
    createIdentityTask(tenantId: String!, code: String!, name: String!): IdentityTask!
    deleteIdentityTask(id: ID!): Boolean!
  }
`;

export const IdentityTaskGqlResolvers = {
  Query: {
    getIdentityTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IdentityTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

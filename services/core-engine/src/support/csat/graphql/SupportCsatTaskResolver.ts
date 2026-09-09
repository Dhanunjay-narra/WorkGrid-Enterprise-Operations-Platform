export const SupportCsatTaskGqlTypeDefs = `
  type SupportCsatTask {
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
    getSupportCsatTask(id: ID!): SupportCsatTask
    listSupportCsatTasks(tenantId: String!, limit: Int): [SupportCsatTask!]!
  }

  extend type Mutation {
    createSupportCsatTask(tenantId: String!, code: String!, name: String!): SupportCsatTask!
    deleteSupportCsatTask(id: ID!): Boolean!
  }
`;

export const SupportCsatTaskGqlResolvers = {
  Query: {
    getSupportCsatTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

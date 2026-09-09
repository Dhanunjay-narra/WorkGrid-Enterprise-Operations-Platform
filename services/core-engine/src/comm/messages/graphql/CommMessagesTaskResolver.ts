export const CommMessagesTaskGqlTypeDefs = `
  type CommMessagesTask {
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
    getCommMessagesTask(id: ID!): CommMessagesTask
    listCommMessagesTasks(tenantId: String!, limit: Int): [CommMessagesTask!]!
  }

  extend type Mutation {
    createCommMessagesTask(tenantId: String!, code: String!, name: String!): CommMessagesTask!
    deleteCommMessagesTask(id: ID!): Boolean!
  }
`;

export const CommMessagesTaskGqlResolvers = {
  Query: {
    getCommMessagesTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

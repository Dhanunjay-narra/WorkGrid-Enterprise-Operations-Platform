export const CommNotificationsTaskGqlTypeDefs = `
  type CommNotificationsTask {
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
    getCommNotificationsTask(id: ID!): CommNotificationsTask
    listCommNotificationsTasks(tenantId: String!, limit: Int): [CommNotificationsTask!]!
  }

  extend type Mutation {
    createCommNotificationsTask(tenantId: String!, code: String!, name: String!): CommNotificationsTask!
    deleteCommNotificationsTask(id: ID!): Boolean!
  }
`;

export const CommNotificationsTaskGqlResolvers = {
  Query: {
    getCommNotificationsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

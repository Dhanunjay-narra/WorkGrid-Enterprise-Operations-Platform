export const CommPresenceTaskGqlTypeDefs = `
  type CommPresenceTask {
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
    getCommPresenceTask(id: ID!): CommPresenceTask
    listCommPresenceTasks(tenantId: String!, limit: Int): [CommPresenceTask!]!
  }

  extend type Mutation {
    createCommPresenceTask(tenantId: String!, code: String!, name: String!): CommPresenceTask!
    deleteCommPresenceTask(id: ID!): Boolean!
  }
`;

export const CommPresenceTaskGqlResolvers = {
  Query: {
    getCommPresenceTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

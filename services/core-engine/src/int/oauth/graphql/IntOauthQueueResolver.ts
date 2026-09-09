export const IntOauthQueueGqlTypeDefs = `
  type IntOauthQueue {
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
    getIntOauthQueue(id: ID!): IntOauthQueue
    listIntOauthQueues(tenantId: String!, limit: Int): [IntOauthQueue!]!
  }

  extend type Mutation {
    createIntOauthQueue(tenantId: String!, code: String!, name: String!): IntOauthQueue!
    deleteIntOauthQueue(id: ID!): Boolean!
  }
`;

export const IntOauthQueueGqlResolvers = {
  Query: {
    getIntOauthQueue: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthQueue", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const CommThreadsSessionGqlTypeDefs = `
  type CommThreadsSession {
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
    getCommThreadsSession(id: ID!): CommThreadsSession
    listCommThreadsSessions(tenantId: String!, limit: Int): [CommThreadsSession!]!
  }

  extend type Mutation {
    createCommThreadsSession(tenantId: String!, code: String!, name: String!): CommThreadsSession!
    deleteCommThreadsSession(id: ID!): Boolean!
  }
`;

export const CommThreadsSessionGqlResolvers = {
  Query: {
    getCommThreadsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

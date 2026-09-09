export const CommMessagesSessionGqlTypeDefs = `
  type CommMessagesSession {
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
    getCommMessagesSession(id: ID!): CommMessagesSession
    listCommMessagesSessions(tenantId: String!, limit: Int): [CommMessagesSession!]!
  }

  extend type Mutation {
    createCommMessagesSession(tenantId: String!, code: String!, name: String!): CommMessagesSession!
    deleteCommMessagesSession(id: ID!): Boolean!
  }
`;

export const CommMessagesSessionGqlResolvers = {
  Query: {
    getCommMessagesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

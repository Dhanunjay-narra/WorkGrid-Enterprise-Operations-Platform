export const CommPresenceSessionGqlTypeDefs = `
  type CommPresenceSession {
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
    getCommPresenceSession(id: ID!): CommPresenceSession
    listCommPresenceSessions(tenantId: String!, limit: Int): [CommPresenceSession!]!
  }

  extend type Mutation {
    createCommPresenceSession(tenantId: String!, code: String!, name: String!): CommPresenceSession!
    deleteCommPresenceSession(id: ID!): Boolean!
  }
`;

export const CommPresenceSessionGqlResolvers = {
  Query: {
    getCommPresenceSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommPresenceSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

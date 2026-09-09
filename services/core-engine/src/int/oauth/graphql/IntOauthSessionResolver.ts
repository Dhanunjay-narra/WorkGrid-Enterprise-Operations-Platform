export const IntOauthSessionGqlTypeDefs = `
  type IntOauthSession {
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
    getIntOauthSession(id: ID!): IntOauthSession
    listIntOauthSessions(tenantId: String!, limit: Int): [IntOauthSession!]!
  }

  extend type Mutation {
    createIntOauthSession(tenantId: String!, code: String!, name: String!): IntOauthSession!
    deleteIntOauthSession(id: ID!): Boolean!
  }
`;

export const IntOauthSessionGqlResolvers = {
  Query: {
    getIntOauthSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

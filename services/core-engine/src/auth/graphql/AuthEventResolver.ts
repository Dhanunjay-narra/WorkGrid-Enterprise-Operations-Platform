export const AuthEventGqlTypeDefs = `
  type AuthEvent {
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
    getAuthEvent(id: ID!): AuthEvent
    listAuthEvents(tenantId: String!, limit: Int): [AuthEvent!]!
  }

  extend type Mutation {
    createAuthEvent(tenantId: String!, code: String!, name: String!): AuthEvent!
    deleteAuthEvent(id: ID!): Boolean!
  }
`;

export const AuthEventGqlResolvers = {
  Query: {
    getAuthEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

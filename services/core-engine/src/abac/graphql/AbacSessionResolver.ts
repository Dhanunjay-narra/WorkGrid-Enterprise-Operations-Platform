export const AbacSessionGqlTypeDefs = `
  type AbacSession {
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
    getAbacSession(id: ID!): AbacSession
    listAbacSessions(tenantId: String!, limit: Int): [AbacSession!]!
  }

  extend type Mutation {
    createAbacSession(tenantId: String!, code: String!, name: String!): AbacSession!
    deleteAbacSession(id: ID!): Boolean!
  }
`;

export const AbacSessionGqlResolvers = {
  Query: {
    getAbacSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AbacSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

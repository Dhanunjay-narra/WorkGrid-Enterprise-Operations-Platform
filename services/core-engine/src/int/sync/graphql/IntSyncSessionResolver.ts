export const IntSyncSessionGqlTypeDefs = `
  type IntSyncSession {
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
    getIntSyncSession(id: ID!): IntSyncSession
    listIntSyncSessions(tenantId: String!, limit: Int): [IntSyncSession!]!
  }

  extend type Mutation {
    createIntSyncSession(tenantId: String!, code: String!, name: String!): IntSyncSession!
    deleteIntSyncSession(id: ID!): Boolean!
  }
`;

export const IntSyncSessionGqlResolvers = {
  Query: {
    getIntSyncSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

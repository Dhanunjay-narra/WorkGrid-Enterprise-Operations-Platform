export const IntSlackSessionGqlTypeDefs = `
  type IntSlackSession {
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
    getIntSlackSession(id: ID!): IntSlackSession
    listIntSlackSessions(tenantId: String!, limit: Int): [IntSlackSession!]!
  }

  extend type Mutation {
    createIntSlackSession(tenantId: String!, code: String!, name: String!): IntSlackSession!
    deleteIntSlackSession(id: ID!): Boolean!
  }
`;

export const IntSlackSessionGqlResolvers = {
  Query: {
    getIntSlackSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

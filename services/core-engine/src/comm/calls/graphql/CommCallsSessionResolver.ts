export const CommCallsSessionGqlTypeDefs = `
  type CommCallsSession {
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
    getCommCallsSession(id: ID!): CommCallsSession
    listCommCallsSessions(tenantId: String!, limit: Int): [CommCallsSession!]!
  }

  extend type Mutation {
    createCommCallsSession(tenantId: String!, code: String!, name: String!): CommCallsSession!
    deleteCommCallsSession(id: ID!): Boolean!
  }
`;

export const CommCallsSessionGqlResolvers = {
  Query: {
    getCommCallsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommCallsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

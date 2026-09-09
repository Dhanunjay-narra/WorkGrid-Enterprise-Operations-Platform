export const CommDigestSessionGqlTypeDefs = `
  type CommDigestSession {
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
    getCommDigestSession(id: ID!): CommDigestSession
    listCommDigestSessions(tenantId: String!, limit: Int): [CommDigestSession!]!
  }

  extend type Mutation {
    createCommDigestSession(tenantId: String!, code: String!, name: String!): CommDigestSession!
    deleteCommDigestSession(id: ID!): Boolean!
  }
`;

export const CommDigestSessionGqlResolvers = {
  Query: {
    getCommDigestSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

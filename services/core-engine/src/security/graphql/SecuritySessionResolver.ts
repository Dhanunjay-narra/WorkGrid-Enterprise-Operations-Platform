export const SecuritySessionGqlTypeDefs = `
  type SecuritySession {
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
    getSecuritySession(id: ID!): SecuritySession
    listSecuritySessions(tenantId: String!, limit: Int): [SecuritySession!]!
  }

  extend type Mutation {
    createSecuritySession(tenantId: String!, code: String!, name: String!): SecuritySession!
    deleteSecuritySession(id: ID!): Boolean!
  }
`;

export const SecuritySessionGqlResolvers = {
  Query: {
    getSecuritySession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecuritySession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

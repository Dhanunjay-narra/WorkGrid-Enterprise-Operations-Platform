export const AuditSessionGqlTypeDefs = `
  type AuditSession {
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
    getAuditSession(id: ID!): AuditSession
    listAuditSessions(tenantId: String!, limit: Int): [AuditSession!]!
  }

  extend type Mutation {
    createAuditSession(tenantId: String!, code: String!, name: String!): AuditSession!
    deleteAuditSession(id: ID!): Boolean!
  }
`;

export const AuditSessionGqlResolvers = {
  Query: {
    getAuditSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuditSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

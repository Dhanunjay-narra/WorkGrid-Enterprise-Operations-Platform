export const SupportCsatSessionGqlTypeDefs = `
  type SupportCsatSession {
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
    getSupportCsatSession(id: ID!): SupportCsatSession
    listSupportCsatSessions(tenantId: String!, limit: Int): [SupportCsatSession!]!
  }

  extend type Mutation {
    createSupportCsatSession(tenantId: String!, code: String!, name: String!): SupportCsatSession!
    deleteSupportCsatSession(id: ID!): Boolean!
  }
`;

export const SupportCsatSessionGqlResolvers = {
  Query: {
    getSupportCsatSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

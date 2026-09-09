export const SupportSlaSessionGqlTypeDefs = `
  type SupportSlaSession {
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
    getSupportSlaSession(id: ID!): SupportSlaSession
    listSupportSlaSessions(tenantId: String!, limit: Int): [SupportSlaSession!]!
  }

  extend type Mutation {
    createSupportSlaSession(tenantId: String!, code: String!, name: String!): SupportSlaSession!
    deleteSupportSlaSession(id: ID!): Boolean!
  }
`;

export const SupportSlaSessionGqlResolvers = {
  Query: {
    getSupportSlaSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

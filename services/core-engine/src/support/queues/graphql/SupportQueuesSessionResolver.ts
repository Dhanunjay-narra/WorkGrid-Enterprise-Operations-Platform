export const SupportQueuesSessionGqlTypeDefs = `
  type SupportQueuesSession {
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
    getSupportQueuesSession(id: ID!): SupportQueuesSession
    listSupportQueuesSessions(tenantId: String!, limit: Int): [SupportQueuesSession!]!
  }

  extend type Mutation {
    createSupportQueuesSession(tenantId: String!, code: String!, name: String!): SupportQueuesSession!
    deleteSupportQueuesSession(id: ID!): Boolean!
  }
`;

export const SupportQueuesSessionGqlResolvers = {
  Query: {
    getSupportQueuesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportQueuesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

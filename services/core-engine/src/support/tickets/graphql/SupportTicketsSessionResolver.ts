export const SupportTicketsSessionGqlTypeDefs = `
  type SupportTicketsSession {
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
    getSupportTicketsSession(id: ID!): SupportTicketsSession
    listSupportTicketsSessions(tenantId: String!, limit: Int): [SupportTicketsSession!]!
  }

  extend type Mutation {
    createSupportTicketsSession(tenantId: String!, code: String!, name: String!): SupportTicketsSession!
    deleteSupportTicketsSession(id: ID!): Boolean!
  }
`;

export const SupportTicketsSessionGqlResolvers = {
  Query: {
    getSupportTicketsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

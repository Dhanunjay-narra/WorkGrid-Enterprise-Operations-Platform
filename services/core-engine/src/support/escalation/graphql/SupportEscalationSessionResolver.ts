export const SupportEscalationSessionGqlTypeDefs = `
  type SupportEscalationSession {
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
    getSupportEscalationSession(id: ID!): SupportEscalationSession
    listSupportEscalationSessions(tenantId: String!, limit: Int): [SupportEscalationSession!]!
  }

  extend type Mutation {
    createSupportEscalationSession(tenantId: String!, code: String!, name: String!): SupportEscalationSession!
    deleteSupportEscalationSession(id: ID!): Boolean!
  }
`;

export const SupportEscalationSessionGqlResolvers = {
  Query: {
    getSupportEscalationSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportEscalationSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

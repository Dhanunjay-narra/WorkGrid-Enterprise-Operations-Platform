export const SupportAgentsSessionGqlTypeDefs = `
  type SupportAgentsSession {
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
    getSupportAgentsSession(id: ID!): SupportAgentsSession
    listSupportAgentsSessions(tenantId: String!, limit: Int): [SupportAgentsSession!]!
  }

  extend type Mutation {
    createSupportAgentsSession(tenantId: String!, code: String!, name: String!): SupportAgentsSession!
    deleteSupportAgentsSession(id: ID!): Boolean!
  }
`;

export const SupportAgentsSessionGqlResolvers = {
  Query: {
    getSupportAgentsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportAgentsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

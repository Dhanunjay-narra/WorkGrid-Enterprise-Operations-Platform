export const ObsLoggingSessionGqlTypeDefs = `
  type ObsLoggingSession {
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
    getObsLoggingSession(id: ID!): ObsLoggingSession
    listObsLoggingSessions(tenantId: String!, limit: Int): [ObsLoggingSession!]!
  }

  extend type Mutation {
    createObsLoggingSession(tenantId: String!, code: String!, name: String!): ObsLoggingSession!
    deleteObsLoggingSession(id: ID!): Boolean!
  }
`;

export const ObsLoggingSessionGqlResolvers = {
  Query: {
    getObsLoggingSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

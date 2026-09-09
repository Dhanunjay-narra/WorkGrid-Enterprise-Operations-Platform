export const ObsTracingSessionGqlTypeDefs = `
  type ObsTracingSession {
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
    getObsTracingSession(id: ID!): ObsTracingSession
    listObsTracingSessions(tenantId: String!, limit: Int): [ObsTracingSession!]!
  }

  extend type Mutation {
    createObsTracingSession(tenantId: String!, code: String!, name: String!): ObsTracingSession!
    deleteObsTracingSession(id: ID!): Boolean!
  }
`;

export const ObsTracingSessionGqlResolvers = {
  Query: {
    getObsTracingSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsTracingSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

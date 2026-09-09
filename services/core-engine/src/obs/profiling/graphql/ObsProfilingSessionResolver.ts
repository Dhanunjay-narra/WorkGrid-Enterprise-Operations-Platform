export const ObsProfilingSessionGqlTypeDefs = `
  type ObsProfilingSession {
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
    getObsProfilingSession(id: ID!): ObsProfilingSession
    listObsProfilingSessions(tenantId: String!, limit: Int): [ObsProfilingSession!]!
  }

  extend type Mutation {
    createObsProfilingSession(tenantId: String!, code: String!, name: String!): ObsProfilingSession!
    deleteObsProfilingSession(id: ID!): Boolean!
  }
`;

export const ObsProfilingSessionGqlResolvers = {
  Query: {
    getObsProfilingSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

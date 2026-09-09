export const ObsSpansSessionGqlTypeDefs = `
  type ObsSpansSession {
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
    getObsSpansSession(id: ID!): ObsSpansSession
    listObsSpansSessions(tenantId: String!, limit: Int): [ObsSpansSession!]!
  }

  extend type Mutation {
    createObsSpansSession(tenantId: String!, code: String!, name: String!): ObsSpansSession!
    deleteObsSpansSession(id: ID!): Boolean!
  }
`;

export const ObsSpansSessionGqlResolvers = {
  Query: {
    getObsSpansSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

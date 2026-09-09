export const ObsProbesSessionGqlTypeDefs = `
  type ObsProbesSession {
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
    getObsProbesSession(id: ID!): ObsProbesSession
    listObsProbesSessions(tenantId: String!, limit: Int): [ObsProbesSession!]!
  }

  extend type Mutation {
    createObsProbesSession(tenantId: String!, code: String!, name: String!): ObsProbesSession!
    deleteObsProbesSession(id: ID!): Boolean!
  }
`;

export const ObsProbesSessionGqlResolvers = {
  Query: {
    getObsProbesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

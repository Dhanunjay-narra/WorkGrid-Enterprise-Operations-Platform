export const ObsProfilingEventGqlTypeDefs = `
  type ObsProfilingEvent {
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
    getObsProfilingEvent(id: ID!): ObsProfilingEvent
    listObsProfilingEvents(tenantId: String!, limit: Int): [ObsProfilingEvent!]!
  }

  extend type Mutation {
    createObsProfilingEvent(tenantId: String!, code: String!, name: String!): ObsProfilingEvent!
    deleteObsProfilingEvent(id: ID!): Boolean!
  }
`;

export const ObsProfilingEventGqlResolvers = {
  Query: {
    getObsProfilingEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

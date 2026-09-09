export const ObsSpansEventGqlTypeDefs = `
  type ObsSpansEvent {
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
    getObsSpansEvent(id: ID!): ObsSpansEvent
    listObsSpansEvents(tenantId: String!, limit: Int): [ObsSpansEvent!]!
  }

  extend type Mutation {
    createObsSpansEvent(tenantId: String!, code: String!, name: String!): ObsSpansEvent!
    deleteObsSpansEvent(id: ID!): Boolean!
  }
`;

export const ObsSpansEventGqlResolvers = {
  Query: {
    getObsSpansEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const ObsProbesEventGqlTypeDefs = `
  type ObsProbesEvent {
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
    getObsProbesEvent(id: ID!): ObsProbesEvent
    listObsProbesEvents(tenantId: String!, limit: Int): [ObsProbesEvent!]!
  }

  extend type Mutation {
    createObsProbesEvent(tenantId: String!, code: String!, name: String!): ObsProbesEvent!
    deleteObsProbesEvent(id: ID!): Boolean!
  }
`;

export const ObsProbesEventGqlResolvers = {
  Query: {
    getObsProbesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

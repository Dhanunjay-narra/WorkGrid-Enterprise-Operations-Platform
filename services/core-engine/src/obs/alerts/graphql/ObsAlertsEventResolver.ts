export const ObsAlertsEventGqlTypeDefs = `
  type ObsAlertsEvent {
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
    getObsAlertsEvent(id: ID!): ObsAlertsEvent
    listObsAlertsEvents(tenantId: String!, limit: Int): [ObsAlertsEvent!]!
  }

  extend type Mutation {
    createObsAlertsEvent(tenantId: String!, code: String!, name: String!): ObsAlertsEvent!
    deleteObsAlertsEvent(id: ID!): Boolean!
  }
`;

export const ObsAlertsEventGqlResolvers = {
  Query: {
    getObsAlertsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

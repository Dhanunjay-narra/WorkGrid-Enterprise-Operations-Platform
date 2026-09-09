export const ObsAlertsSessionGqlTypeDefs = `
  type ObsAlertsSession {
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
    getObsAlertsSession(id: ID!): ObsAlertsSession
    listObsAlertsSessions(tenantId: String!, limit: Int): [ObsAlertsSession!]!
  }

  extend type Mutation {
    createObsAlertsSession(tenantId: String!, code: String!, name: String!): ObsAlertsSession!
    deleteObsAlertsSession(id: ID!): Boolean!
  }
`;

export const ObsAlertsSessionGqlResolvers = {
  Query: {
    getObsAlertsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

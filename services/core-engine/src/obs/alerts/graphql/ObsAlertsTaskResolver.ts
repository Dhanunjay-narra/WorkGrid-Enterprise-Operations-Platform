export const ObsAlertsTaskGqlTypeDefs = `
  type ObsAlertsTask {
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
    getObsAlertsTask(id: ID!): ObsAlertsTask
    listObsAlertsTasks(tenantId: String!, limit: Int): [ObsAlertsTask!]!
  }

  extend type Mutation {
    createObsAlertsTask(tenantId: String!, code: String!, name: String!): ObsAlertsTask!
    deleteObsAlertsTask(id: ID!): Boolean!
  }
`;

export const ObsAlertsTaskGqlResolvers = {
  Query: {
    getObsAlertsTask: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsTask", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

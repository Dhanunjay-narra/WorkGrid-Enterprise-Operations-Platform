export const ObsAlertsStateGqlTypeDefs = `
  type ObsAlertsState {
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
    getObsAlertsState(id: ID!): ObsAlertsState
    listObsAlertsStates(tenantId: String!, limit: Int): [ObsAlertsState!]!
  }

  extend type Mutation {
    createObsAlertsState(tenantId: String!, code: String!, name: String!): ObsAlertsState!
    deleteObsAlertsState(id: ID!): Boolean!
  }
`;

export const ObsAlertsStateGqlResolvers = {
  Query: {
    getObsAlertsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

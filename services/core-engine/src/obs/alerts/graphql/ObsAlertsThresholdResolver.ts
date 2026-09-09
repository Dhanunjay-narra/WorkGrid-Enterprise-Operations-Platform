export const ObsAlertsThresholdGqlTypeDefs = `
  type ObsAlertsThreshold {
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
    getObsAlertsThreshold(id: ID!): ObsAlertsThreshold
    listObsAlertsThresholds(tenantId: String!, limit: Int): [ObsAlertsThreshold!]!
  }

  extend type Mutation {
    createObsAlertsThreshold(tenantId: String!, code: String!, name: String!): ObsAlertsThreshold!
    deleteObsAlertsThreshold(id: ID!): Boolean!
  }
`;

export const ObsAlertsThresholdGqlResolvers = {
  Query: {
    getObsAlertsThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

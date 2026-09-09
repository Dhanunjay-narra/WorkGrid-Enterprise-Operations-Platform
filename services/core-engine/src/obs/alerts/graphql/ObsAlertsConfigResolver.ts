export const ObsAlertsConfigGqlTypeDefs = `
  type ObsAlertsConfig {
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
    getObsAlertsConfig(id: ID!): ObsAlertsConfig
    listObsAlertsConfigs(tenantId: String!, limit: Int): [ObsAlertsConfig!]!
  }

  extend type Mutation {
    createObsAlertsConfig(tenantId: String!, code: String!, name: String!): ObsAlertsConfig!
    deleteObsAlertsConfig(id: ID!): Boolean!
  }
`;

export const ObsAlertsConfigGqlResolvers = {
  Query: {
    getObsAlertsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

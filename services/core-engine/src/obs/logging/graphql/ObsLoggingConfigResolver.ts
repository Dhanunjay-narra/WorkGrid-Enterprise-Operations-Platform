export const ObsLoggingConfigGqlTypeDefs = `
  type ObsLoggingConfig {
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
    getObsLoggingConfig(id: ID!): ObsLoggingConfig
    listObsLoggingConfigs(tenantId: String!, limit: Int): [ObsLoggingConfig!]!
  }

  extend type Mutation {
    createObsLoggingConfig(tenantId: String!, code: String!, name: String!): ObsLoggingConfig!
    deleteObsLoggingConfig(id: ID!): Boolean!
  }
`;

export const ObsLoggingConfigGqlResolvers = {
  Query: {
    getObsLoggingConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

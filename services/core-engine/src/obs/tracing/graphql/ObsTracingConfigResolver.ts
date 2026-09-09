export const ObsTracingConfigGqlTypeDefs = `
  type ObsTracingConfig {
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
    getObsTracingConfig(id: ID!): ObsTracingConfig
    listObsTracingConfigs(tenantId: String!, limit: Int): [ObsTracingConfig!]!
  }

  extend type Mutation {
    createObsTracingConfig(tenantId: String!, code: String!, name: String!): ObsTracingConfig!
    deleteObsTracingConfig(id: ID!): Boolean!
  }
`;

export const ObsTracingConfigGqlResolvers = {
  Query: {
    getObsTracingConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsTracingConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

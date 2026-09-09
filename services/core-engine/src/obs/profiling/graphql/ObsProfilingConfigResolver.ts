export const ObsProfilingConfigGqlTypeDefs = `
  type ObsProfilingConfig {
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
    getObsProfilingConfig(id: ID!): ObsProfilingConfig
    listObsProfilingConfigs(tenantId: String!, limit: Int): [ObsProfilingConfig!]!
  }

  extend type Mutation {
    createObsProfilingConfig(tenantId: String!, code: String!, name: String!): ObsProfilingConfig!
    deleteObsProfilingConfig(id: ID!): Boolean!
  }
`;

export const ObsProfilingConfigGqlResolvers = {
  Query: {
    getObsProfilingConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProfilingConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const ObsProbesConfigGqlTypeDefs = `
  type ObsProbesConfig {
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
    getObsProbesConfig(id: ID!): ObsProbesConfig
    listObsProbesConfigs(tenantId: String!, limit: Int): [ObsProbesConfig!]!
  }

  extend type Mutation {
    createObsProbesConfig(tenantId: String!, code: String!, name: String!): ObsProbesConfig!
    deleteObsProbesConfig(id: ID!): Boolean!
  }
`;

export const ObsProbesConfigGqlResolvers = {
  Query: {
    getObsProbesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

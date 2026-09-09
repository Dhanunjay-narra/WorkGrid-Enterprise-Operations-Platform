export const IotLocationsConfigGqlTypeDefs = `
  type IotLocationsConfig {
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
    getIotLocationsConfig(id: ID!): IotLocationsConfig
    listIotLocationsConfigs(tenantId: String!, limit: Int): [IotLocationsConfig!]!
  }

  extend type Mutation {
    createIotLocationsConfig(tenantId: String!, code: String!, name: String!): IotLocationsConfig!
    deleteIotLocationsConfig(id: ID!): Boolean!
  }
`;

export const IotLocationsConfigGqlResolvers = {
  Query: {
    getIotLocationsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

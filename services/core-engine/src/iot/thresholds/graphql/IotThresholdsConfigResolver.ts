export const IotThresholdsConfigGqlTypeDefs = `
  type IotThresholdsConfig {
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
    getIotThresholdsConfig(id: ID!): IotThresholdsConfig
    listIotThresholdsConfigs(tenantId: String!, limit: Int): [IotThresholdsConfig!]!
  }

  extend type Mutation {
    createIotThresholdsConfig(tenantId: String!, code: String!, name: String!): IotThresholdsConfig!
    deleteIotThresholdsConfig(id: ID!): Boolean!
  }
`;

export const IotThresholdsConfigGqlResolvers = {
  Query: {
    getIotThresholdsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

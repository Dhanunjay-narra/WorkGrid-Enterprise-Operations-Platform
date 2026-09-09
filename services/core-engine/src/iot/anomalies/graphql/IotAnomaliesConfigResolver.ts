export const IotAnomaliesConfigGqlTypeDefs = `
  type IotAnomaliesConfig {
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
    getIotAnomaliesConfig(id: ID!): IotAnomaliesConfig
    listIotAnomaliesConfigs(tenantId: String!, limit: Int): [IotAnomaliesConfig!]!
  }

  extend type Mutation {
    createIotAnomaliesConfig(tenantId: String!, code: String!, name: String!): IotAnomaliesConfig!
    deleteIotAnomaliesConfig(id: ID!): Boolean!
  }
`;

export const IotAnomaliesConfigGqlResolvers = {
  Query: {
    getIotAnomaliesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

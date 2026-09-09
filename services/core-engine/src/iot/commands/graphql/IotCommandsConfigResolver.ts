export const IotCommandsConfigGqlTypeDefs = `
  type IotCommandsConfig {
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
    getIotCommandsConfig(id: ID!): IotCommandsConfig
    listIotCommandsConfigs(tenantId: String!, limit: Int): [IotCommandsConfig!]!
  }

  extend type Mutation {
    createIotCommandsConfig(tenantId: String!, code: String!, name: String!): IotCommandsConfig!
    deleteIotCommandsConfig(id: ID!): Boolean!
  }
`;

export const IotCommandsConfigGqlResolvers = {
  Query: {
    getIotCommandsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const IotFleetConfigGqlTypeDefs = `
  type IotFleetConfig {
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
    getIotFleetConfig(id: ID!): IotFleetConfig
    listIotFleetConfigs(tenantId: String!, limit: Int): [IotFleetConfig!]!
  }

  extend type Mutation {
    createIotFleetConfig(tenantId: String!, code: String!, name: String!): IotFleetConfig!
    deleteIotFleetConfig(id: ID!): Boolean!
  }
`;

export const IotFleetConfigGqlResolvers = {
  Query: {
    getIotFleetConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

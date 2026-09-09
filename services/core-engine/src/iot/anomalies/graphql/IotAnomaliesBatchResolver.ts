export const IotAnomaliesBatchGqlTypeDefs = `
  type IotAnomaliesBatch {
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
    getIotAnomaliesBatch(id: ID!): IotAnomaliesBatch
    listIotAnomaliesBatchs(tenantId: String!, limit: Int): [IotAnomaliesBatch!]!
  }

  extend type Mutation {
    createIotAnomaliesBatch(tenantId: String!, code: String!, name: String!): IotAnomaliesBatch!
    deleteIotAnomaliesBatch(id: ID!): Boolean!
  }
`;

export const IotAnomaliesBatchGqlResolvers = {
  Query: {
    getIotAnomaliesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

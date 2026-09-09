export const IotThresholdsBatchGqlTypeDefs = `
  type IotThresholdsBatch {
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
    getIotThresholdsBatch(id: ID!): IotThresholdsBatch
    listIotThresholdsBatchs(tenantId: String!, limit: Int): [IotThresholdsBatch!]!
  }

  extend type Mutation {
    createIotThresholdsBatch(tenantId: String!, code: String!, name: String!): IotThresholdsBatch!
    deleteIotThresholdsBatch(id: ID!): Boolean!
  }
`;

export const IotThresholdsBatchGqlResolvers = {
  Query: {
    getIotThresholdsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

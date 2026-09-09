export const IotAnomaliesThresholdGqlTypeDefs = `
  type IotAnomaliesThreshold {
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
    getIotAnomaliesThreshold(id: ID!): IotAnomaliesThreshold
    listIotAnomaliesThresholds(tenantId: String!, limit: Int): [IotAnomaliesThreshold!]!
  }

  extend type Mutation {
    createIotAnomaliesThreshold(tenantId: String!, code: String!, name: String!): IotAnomaliesThreshold!
    deleteIotAnomaliesThreshold(id: ID!): Boolean!
  }
`;

export const IotAnomaliesThresholdGqlResolvers = {
  Query: {
    getIotAnomaliesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

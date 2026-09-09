export const IotCommandsMetricGqlTypeDefs = `
  type IotCommandsMetric {
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
    getIotCommandsMetric(id: ID!): IotCommandsMetric
    listIotCommandsMetrics(tenantId: String!, limit: Int): [IotCommandsMetric!]!
  }

  extend type Mutation {
    createIotCommandsMetric(tenantId: String!, code: String!, name: String!): IotCommandsMetric!
    deleteIotCommandsMetric(id: ID!): Boolean!
  }
`;

export const IotCommandsMetricGqlResolvers = {
  Query: {
    getIotCommandsMetric: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsMetric", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

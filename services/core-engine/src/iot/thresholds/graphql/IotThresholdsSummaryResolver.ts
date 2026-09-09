export const IotThresholdsSummaryGqlTypeDefs = `
  type IotThresholdsSummary {
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
    getIotThresholdsSummary(id: ID!): IotThresholdsSummary
    listIotThresholdsSummarys(tenantId: String!, limit: Int): [IotThresholdsSummary!]!
  }

  extend type Mutation {
    createIotThresholdsSummary(tenantId: String!, code: String!, name: String!): IotThresholdsSummary!
    deleteIotThresholdsSummary(id: ID!): Boolean!
  }
`;

export const IotThresholdsSummaryGqlResolvers = {
  Query: {
    getIotThresholdsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

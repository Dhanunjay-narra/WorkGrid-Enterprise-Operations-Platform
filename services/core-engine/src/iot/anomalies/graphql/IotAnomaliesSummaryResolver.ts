export const IotAnomaliesSummaryGqlTypeDefs = `
  type IotAnomaliesSummary {
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
    getIotAnomaliesSummary(id: ID!): IotAnomaliesSummary
    listIotAnomaliesSummarys(tenantId: String!, limit: Int): [IotAnomaliesSummary!]!
  }

  extend type Mutation {
    createIotAnomaliesSummary(tenantId: String!, code: String!, name: String!): IotAnomaliesSummary!
    deleteIotAnomaliesSummary(id: ID!): Boolean!
  }
`;

export const IotAnomaliesSummaryGqlResolvers = {
  Query: {
    getIotAnomaliesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

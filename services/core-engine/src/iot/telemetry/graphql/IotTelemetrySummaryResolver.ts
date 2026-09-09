export const IotTelemetrySummaryGqlTypeDefs = `
  type IotTelemetrySummary {
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
    getIotTelemetrySummary(id: ID!): IotTelemetrySummary
    listIotTelemetrySummarys(tenantId: String!, limit: Int): [IotTelemetrySummary!]!
  }

  extend type Mutation {
    createIotTelemetrySummary(tenantId: String!, code: String!, name: String!): IotTelemetrySummary!
    deleteIotTelemetrySummary(id: ID!): Boolean!
  }
`;

export const IotTelemetrySummaryGqlResolvers = {
  Query: {
    getIotTelemetrySummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotTelemetrySummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

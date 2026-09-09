export const IotFleetSummaryGqlTypeDefs = `
  type IotFleetSummary {
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
    getIotFleetSummary(id: ID!): IotFleetSummary
    listIotFleetSummarys(tenantId: String!, limit: Int): [IotFleetSummary!]!
  }

  extend type Mutation {
    createIotFleetSummary(tenantId: String!, code: String!, name: String!): IotFleetSummary!
    deleteIotFleetSummary(id: ID!): Boolean!
  }
`;

export const IotFleetSummaryGqlResolvers = {
  Query: {
    getIotFleetSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

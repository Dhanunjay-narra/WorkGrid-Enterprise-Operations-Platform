export const IotLocationsSummaryGqlTypeDefs = `
  type IotLocationsSummary {
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
    getIotLocationsSummary(id: ID!): IotLocationsSummary
    listIotLocationsSummarys(tenantId: String!, limit: Int): [IotLocationsSummary!]!
  }

  extend type Mutation {
    createIotLocationsSummary(tenantId: String!, code: String!, name: String!): IotLocationsSummary!
    deleteIotLocationsSummary(id: ID!): Boolean!
  }
`;

export const IotLocationsSummaryGqlResolvers = {
  Query: {
    getIotLocationsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

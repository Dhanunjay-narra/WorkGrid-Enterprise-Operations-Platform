export const IotCommandsSummaryGqlTypeDefs = `
  type IotCommandsSummary {
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
    getIotCommandsSummary(id: ID!): IotCommandsSummary
    listIotCommandsSummarys(tenantId: String!, limit: Int): [IotCommandsSummary!]!
  }

  extend type Mutation {
    createIotCommandsSummary(tenantId: String!, code: String!, name: String!): IotCommandsSummary!
    deleteIotCommandsSummary(id: ID!): Boolean!
  }
`;

export const IotCommandsSummaryGqlResolvers = {
  Query: {
    getIotCommandsSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const IotFirmwareSummaryGqlTypeDefs = `
  type IotFirmwareSummary {
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
    getIotFirmwareSummary(id: ID!): IotFirmwareSummary
    listIotFirmwareSummarys(tenantId: String!, limit: Int): [IotFirmwareSummary!]!
  }

  extend type Mutation {
    createIotFirmwareSummary(tenantId: String!, code: String!, name: String!): IotFirmwareSummary!
    deleteIotFirmwareSummary(id: ID!): Boolean!
  }
`;

export const IotFirmwareSummaryGqlResolvers = {
  Query: {
    getIotFirmwareSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFirmwareSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

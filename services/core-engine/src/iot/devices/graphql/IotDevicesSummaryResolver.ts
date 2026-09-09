export const IotDevicesSummaryGqlTypeDefs = `
  type IotDevicesSummary {
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
    getIotDevicesSummary(id: ID!): IotDevicesSummary
    listIotDevicesSummarys(tenantId: String!, limit: Int): [IotDevicesSummary!]!
  }

  extend type Mutation {
    createIotDevicesSummary(tenantId: String!, code: String!, name: String!): IotDevicesSummary!
    deleteIotDevicesSummary(id: ID!): Boolean!
  }
`;

export const IotDevicesSummaryGqlResolvers = {
  Query: {
    getIotDevicesSummary: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotDevicesSummary", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

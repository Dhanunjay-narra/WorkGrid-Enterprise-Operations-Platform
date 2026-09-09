export const IotAnomaliesEntryGqlTypeDefs = `
  type IotAnomaliesEntry {
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
    getIotAnomaliesEntry(id: ID!): IotAnomaliesEntry
    listIotAnomaliesEntrys(tenantId: String!, limit: Int): [IotAnomaliesEntry!]!
  }

  extend type Mutation {
    createIotAnomaliesEntry(tenantId: String!, code: String!, name: String!): IotAnomaliesEntry!
    deleteIotAnomaliesEntry(id: ID!): Boolean!
  }
`;

export const IotAnomaliesEntryGqlResolvers = {
  Query: {
    getIotAnomaliesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

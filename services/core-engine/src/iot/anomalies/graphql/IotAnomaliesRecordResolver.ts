export const IotAnomaliesRecordGqlTypeDefs = `
  type IotAnomaliesRecord {
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
    getIotAnomaliesRecord(id: ID!): IotAnomaliesRecord
    listIotAnomaliesRecords(tenantId: String!, limit: Int): [IotAnomaliesRecord!]!
  }

  extend type Mutation {
    createIotAnomaliesRecord(tenantId: String!, code: String!, name: String!): IotAnomaliesRecord!
    deleteIotAnomaliesRecord(id: ID!): Boolean!
  }
`;

export const IotAnomaliesRecordGqlResolvers = {
  Query: {
    getIotAnomaliesRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

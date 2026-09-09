export const IotLocationsRecordGqlTypeDefs = `
  type IotLocationsRecord {
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
    getIotLocationsRecord(id: ID!): IotLocationsRecord
    listIotLocationsRecords(tenantId: String!, limit: Int): [IotLocationsRecord!]!
  }

  extend type Mutation {
    createIotLocationsRecord(tenantId: String!, code: String!, name: String!): IotLocationsRecord!
    deleteIotLocationsRecord(id: ID!): Boolean!
  }
`;

export const IotLocationsRecordGqlResolvers = {
  Query: {
    getIotLocationsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotLocationsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

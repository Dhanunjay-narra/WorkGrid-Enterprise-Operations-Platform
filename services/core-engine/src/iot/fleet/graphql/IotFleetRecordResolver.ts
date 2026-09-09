export const IotFleetRecordGqlTypeDefs = `
  type IotFleetRecord {
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
    getIotFleetRecord(id: ID!): IotFleetRecord
    listIotFleetRecords(tenantId: String!, limit: Int): [IotFleetRecord!]!
  }

  extend type Mutation {
    createIotFleetRecord(tenantId: String!, code: String!, name: String!): IotFleetRecord!
    deleteIotFleetRecord(id: ID!): Boolean!
  }
`;

export const IotFleetRecordGqlResolvers = {
  Query: {
    getIotFleetRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotFleetRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

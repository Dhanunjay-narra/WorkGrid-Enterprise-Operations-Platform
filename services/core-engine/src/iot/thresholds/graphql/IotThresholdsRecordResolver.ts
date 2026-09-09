export const IotThresholdsRecordGqlTypeDefs = `
  type IotThresholdsRecord {
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
    getIotThresholdsRecord(id: ID!): IotThresholdsRecord
    listIotThresholdsRecords(tenantId: String!, limit: Int): [IotThresholdsRecord!]!
  }

  extend type Mutation {
    createIotThresholdsRecord(tenantId: String!, code: String!, name: String!): IotThresholdsRecord!
    deleteIotThresholdsRecord(id: ID!): Boolean!
  }
`;

export const IotThresholdsRecordGqlResolvers = {
  Query: {
    getIotThresholdsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotThresholdsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

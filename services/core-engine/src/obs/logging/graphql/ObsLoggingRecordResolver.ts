export const ObsLoggingRecordGqlTypeDefs = `
  type ObsLoggingRecord {
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
    getObsLoggingRecord(id: ID!): ObsLoggingRecord
    listObsLoggingRecords(tenantId: String!, limit: Int): [ObsLoggingRecord!]!
  }

  extend type Mutation {
    createObsLoggingRecord(tenantId: String!, code: String!, name: String!): ObsLoggingRecord!
    deleteObsLoggingRecord(id: ID!): Boolean!
  }
`;

export const ObsLoggingRecordGqlResolvers = {
  Query: {
    getObsLoggingRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsLoggingRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

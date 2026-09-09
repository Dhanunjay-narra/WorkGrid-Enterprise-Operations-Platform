export const ObsTracingRecordGqlTypeDefs = `
  type ObsTracingRecord {
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
    getObsTracingRecord(id: ID!): ObsTracingRecord
    listObsTracingRecords(tenantId: String!, limit: Int): [ObsTracingRecord!]!
  }

  extend type Mutation {
    createObsTracingRecord(tenantId: String!, code: String!, name: String!): ObsTracingRecord!
    deleteObsTracingRecord(id: ID!): Boolean!
  }
`;

export const ObsTracingRecordGqlResolvers = {
  Query: {
    getObsTracingRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsTracingRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

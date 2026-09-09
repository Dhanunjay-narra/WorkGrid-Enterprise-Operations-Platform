export const IntSyncRecordGqlTypeDefs = `
  type IntSyncRecord {
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
    getIntSyncRecord(id: ID!): IntSyncRecord
    listIntSyncRecords(tenantId: String!, limit: Int): [IntSyncRecord!]!
  }

  extend type Mutation {
    createIntSyncRecord(tenantId: String!, code: String!, name: String!): IntSyncRecord!
    deleteIntSyncRecord(id: ID!): Boolean!
  }
`;

export const IntSyncRecordGqlResolvers = {
  Query: {
    getIntSyncRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSyncRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const DmsRetentionRecordGqlTypeDefs = `
  type DmsRetentionRecord {
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
    getDmsRetentionRecord(id: ID!): DmsRetentionRecord
    listDmsRetentionRecords(tenantId: String!, limit: Int): [DmsRetentionRecord!]!
  }

  extend type Mutation {
    createDmsRetentionRecord(tenantId: String!, code: String!, name: String!): DmsRetentionRecord!
    deleteDmsRetentionRecord(id: ID!): Boolean!
  }
`;

export const DmsRetentionRecordGqlResolvers = {
  Query: {
    getDmsRetentionRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsRetentionRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

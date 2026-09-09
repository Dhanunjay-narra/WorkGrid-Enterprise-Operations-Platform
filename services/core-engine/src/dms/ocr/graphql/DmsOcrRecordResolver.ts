export const DmsOcrRecordGqlTypeDefs = `
  type DmsOcrRecord {
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
    getDmsOcrRecord(id: ID!): DmsOcrRecord
    listDmsOcrRecords(tenantId: String!, limit: Int): [DmsOcrRecord!]!
  }

  extend type Mutation {
    createDmsOcrRecord(tenantId: String!, code: String!, name: String!): DmsOcrRecord!
    deleteDmsOcrRecord(id: ID!): Boolean!
  }
`;

export const DmsOcrRecordGqlResolvers = {
  Query: {
    getDmsOcrRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

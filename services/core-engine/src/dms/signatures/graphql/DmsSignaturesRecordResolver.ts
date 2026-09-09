export const DmsSignaturesRecordGqlTypeDefs = `
  type DmsSignaturesRecord {
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
    getDmsSignaturesRecord(id: ID!): DmsSignaturesRecord
    listDmsSignaturesRecords(tenantId: String!, limit: Int): [DmsSignaturesRecord!]!
  }

  extend type Mutation {
    createDmsSignaturesRecord(tenantId: String!, code: String!, name: String!): DmsSignaturesRecord!
    deleteDmsSignaturesRecord(id: ID!): Boolean!
  }
`;

export const DmsSignaturesRecordGqlResolvers = {
  Query: {
    getDmsSignaturesRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

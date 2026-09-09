export const SupportCsatRecordGqlTypeDefs = `
  type SupportCsatRecord {
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
    getSupportCsatRecord(id: ID!): SupportCsatRecord
    listSupportCsatRecords(tenantId: String!, limit: Int): [SupportCsatRecord!]!
  }

  extend type Mutation {
    createSupportCsatRecord(tenantId: String!, code: String!, name: String!): SupportCsatRecord!
    deleteSupportCsatRecord(id: ID!): Boolean!
  }
`;

export const SupportCsatRecordGqlResolvers = {
  Query: {
    getSupportCsatRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportCsatRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

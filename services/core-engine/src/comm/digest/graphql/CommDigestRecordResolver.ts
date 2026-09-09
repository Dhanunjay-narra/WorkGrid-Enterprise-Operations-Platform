export const CommDigestRecordGqlTypeDefs = `
  type CommDigestRecord {
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
    getCommDigestRecord(id: ID!): CommDigestRecord
    listCommDigestRecords(tenantId: String!, limit: Int): [CommDigestRecord!]!
  }

  extend type Mutation {
    createCommDigestRecord(tenantId: String!, code: String!, name: String!): CommDigestRecord!
    deleteCommDigestRecord(id: ID!): Boolean!
  }
`;

export const CommDigestRecordGqlResolvers = {
  Query: {
    getCommDigestRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommDigestRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

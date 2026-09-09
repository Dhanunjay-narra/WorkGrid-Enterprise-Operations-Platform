export const IntRateLimitsRecordGqlTypeDefs = `
  type IntRateLimitsRecord {
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
    getIntRateLimitsRecord(id: ID!): IntRateLimitsRecord
    listIntRateLimitsRecords(tenantId: String!, limit: Int): [IntRateLimitsRecord!]!
  }

  extend type Mutation {
    createIntRateLimitsRecord(tenantId: String!, code: String!, name: String!): IntRateLimitsRecord!
    deleteIntRateLimitsRecord(id: ID!): Boolean!
  }
`;

export const IntRateLimitsRecordGqlResolvers = {
  Query: {
    getIntRateLimitsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntRateLimitsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

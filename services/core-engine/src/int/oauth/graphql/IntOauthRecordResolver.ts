export const IntOauthRecordGqlTypeDefs = `
  type IntOauthRecord {
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
    getIntOauthRecord(id: ID!): IntOauthRecord
    listIntOauthRecords(tenantId: String!, limit: Int): [IntOauthRecord!]!
  }

  extend type Mutation {
    createIntOauthRecord(tenantId: String!, code: String!, name: String!): IntOauthRecord!
    deleteIntOauthRecord(id: ID!): Boolean!
  }
`;

export const IntOauthRecordGqlResolvers = {
  Query: {
    getIntOauthRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntOauthRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

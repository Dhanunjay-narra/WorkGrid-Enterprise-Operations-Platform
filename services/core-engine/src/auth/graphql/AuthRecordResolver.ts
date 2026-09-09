export const AuthRecordGqlTypeDefs = `
  type AuthRecord {
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
    getAuthRecord(id: ID!): AuthRecord
    listAuthRecords(tenantId: String!, limit: Int): [AuthRecord!]!
  }

  extend type Mutation {
    createAuthRecord(tenantId: String!, code: String!, name: String!): AuthRecord!
    deleteAuthRecord(id: ID!): Boolean!
  }
`;

export const AuthRecordGqlResolvers = {
  Query: {
    getAuthRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AuthRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

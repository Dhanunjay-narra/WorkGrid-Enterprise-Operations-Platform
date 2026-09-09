export const SecurityRecordGqlTypeDefs = `
  type SecurityRecord {
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
    getSecurityRecord(id: ID!): SecurityRecord
    listSecurityRecords(tenantId: String!, limit: Int): [SecurityRecord!]!
  }

  extend type Mutation {
    createSecurityRecord(tenantId: String!, code: String!, name: String!): SecurityRecord!
    deleteSecurityRecord(id: ID!): Boolean!
  }
`;

export const SecurityRecordGqlResolvers = {
  Query: {
    getSecurityRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

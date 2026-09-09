export const CommThreadsRecordGqlTypeDefs = `
  type CommThreadsRecord {
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
    getCommThreadsRecord(id: ID!): CommThreadsRecord
    listCommThreadsRecords(tenantId: String!, limit: Int): [CommThreadsRecord!]!
  }

  extend type Mutation {
    createCommThreadsRecord(tenantId: String!, code: String!, name: String!): CommThreadsRecord!
    deleteCommThreadsRecord(id: ID!): Boolean!
  }
`;

export const CommThreadsRecordGqlResolvers = {
  Query: {
    getCommThreadsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommThreadsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

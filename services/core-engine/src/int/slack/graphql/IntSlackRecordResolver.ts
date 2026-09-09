export const IntSlackRecordGqlTypeDefs = `
  type IntSlackRecord {
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
    getIntSlackRecord(id: ID!): IntSlackRecord
    listIntSlackRecords(tenantId: String!, limit: Int): [IntSlackRecord!]!
  }

  extend type Mutation {
    createIntSlackRecord(tenantId: String!, code: String!, name: String!): IntSlackRecord!
    deleteIntSlackRecord(id: ID!): Boolean!
  }
`;

export const IntSlackRecordGqlResolvers = {
  Query: {
    getIntSlackRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

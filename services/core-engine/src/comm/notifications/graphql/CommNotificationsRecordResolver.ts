export const CommNotificationsRecordGqlTypeDefs = `
  type CommNotificationsRecord {
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
    getCommNotificationsRecord(id: ID!): CommNotificationsRecord
    listCommNotificationsRecords(tenantId: String!, limit: Int): [CommNotificationsRecord!]!
  }

  extend type Mutation {
    createCommNotificationsRecord(tenantId: String!, code: String!, name: String!): CommNotificationsRecord!
    deleteCommNotificationsRecord(id: ID!): Boolean!
  }
`;

export const CommNotificationsRecordGqlResolvers = {
  Query: {
    getCommNotificationsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommNotificationsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

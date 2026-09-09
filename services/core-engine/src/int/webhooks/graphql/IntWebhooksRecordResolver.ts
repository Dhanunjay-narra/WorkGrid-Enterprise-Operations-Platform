export const IntWebhooksRecordGqlTypeDefs = `
  type IntWebhooksRecord {
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
    getIntWebhooksRecord(id: ID!): IntWebhooksRecord
    listIntWebhooksRecords(tenantId: String!, limit: Int): [IntWebhooksRecord!]!
  }

  extend type Mutation {
    createIntWebhooksRecord(tenantId: String!, code: String!, name: String!): IntWebhooksRecord!
    deleteIntWebhooksRecord(id: ID!): Boolean!
  }
`;

export const IntWebhooksRecordGqlResolvers = {
  Query: {
    getIntWebhooksRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

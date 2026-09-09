export const CommWebhooksRecordGqlTypeDefs = `
  type CommWebhooksRecord {
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
    getCommWebhooksRecord(id: ID!): CommWebhooksRecord
    listCommWebhooksRecords(tenantId: String!, limit: Int): [CommWebhooksRecord!]!
  }

  extend type Mutation {
    createCommWebhooksRecord(tenantId: String!, code: String!, name: String!): CommWebhooksRecord!
    deleteCommWebhooksRecord(id: ID!): Boolean!
  }
`;

export const CommWebhooksRecordGqlResolvers = {
  Query: {
    getCommWebhooksRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

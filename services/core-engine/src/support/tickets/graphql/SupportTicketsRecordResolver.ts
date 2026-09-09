export const SupportTicketsRecordGqlTypeDefs = `
  type SupportTicketsRecord {
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
    getSupportTicketsRecord(id: ID!): SupportTicketsRecord
    listSupportTicketsRecords(tenantId: String!, limit: Int): [SupportTicketsRecord!]!
  }

  extend type Mutation {
    createSupportTicketsRecord(tenantId: String!, code: String!, name: String!): SupportTicketsRecord!
    deleteSupportTicketsRecord(id: ID!): Boolean!
  }
`;

export const SupportTicketsRecordGqlResolvers = {
  Query: {
    getSupportTicketsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportTicketsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const SupportKnowledgeRecordGqlTypeDefs = `
  type SupportKnowledgeRecord {
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
    getSupportKnowledgeRecord(id: ID!): SupportKnowledgeRecord
    listSupportKnowledgeRecords(tenantId: String!, limit: Int): [SupportKnowledgeRecord!]!
  }

  extend type Mutation {
    createSupportKnowledgeRecord(tenantId: String!, code: String!, name: String!): SupportKnowledgeRecord!
    deleteSupportKnowledgeRecord(id: ID!): Boolean!
  }
`;

export const SupportKnowledgeRecordGqlResolvers = {
  Query: {
    getSupportKnowledgeRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportKnowledgeRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

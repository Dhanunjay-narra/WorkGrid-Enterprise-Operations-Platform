export const AiPromptsRecordGqlTypeDefs = `
  type AiPromptsRecord {
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
    getAiPromptsRecord(id: ID!): AiPromptsRecord
    listAiPromptsRecords(tenantId: String!, limit: Int): [AiPromptsRecord!]!
  }

  extend type Mutation {
    createAiPromptsRecord(tenantId: String!, code: String!, name: String!): AiPromptsRecord!
    deleteAiPromptsRecord(id: ID!): Boolean!
  }
`;

export const AiPromptsRecordGqlResolvers = {
  Query: {
    getAiPromptsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "AiPromptsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

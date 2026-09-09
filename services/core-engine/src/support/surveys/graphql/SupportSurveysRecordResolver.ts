export const SupportSurveysRecordGqlTypeDefs = `
  type SupportSurveysRecord {
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
    getSupportSurveysRecord(id: ID!): SupportSurveysRecord
    listSupportSurveysRecords(tenantId: String!, limit: Int): [SupportSurveysRecord!]!
  }

  extend type Mutation {
    createSupportSurveysRecord(tenantId: String!, code: String!, name: String!): SupportSurveysRecord!
    deleteSupportSurveysRecord(id: ID!): Boolean!
  }
`;

export const SupportSurveysRecordGqlResolvers = {
  Query: {
    getSupportSurveysRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const ObsSpansRecordGqlTypeDefs = `
  type ObsSpansRecord {
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
    getObsSpansRecord(id: ID!): ObsSpansRecord
    listObsSpansRecords(tenantId: String!, limit: Int): [ObsSpansRecord!]!
  }

  extend type Mutation {
    createObsSpansRecord(tenantId: String!, code: String!, name: String!): ObsSpansRecord!
    deleteObsSpansRecord(id: ID!): Boolean!
  }
`;

export const ObsSpansRecordGqlResolvers = {
  Query: {
    getObsSpansRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsSpansRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

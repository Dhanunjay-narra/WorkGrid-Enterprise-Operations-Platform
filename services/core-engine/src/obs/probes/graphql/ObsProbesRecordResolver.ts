export const ObsProbesRecordGqlTypeDefs = `
  type ObsProbesRecord {
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
    getObsProbesRecord(id: ID!): ObsProbesRecord
    listObsProbesRecords(tenantId: String!, limit: Int): [ObsProbesRecord!]!
  }

  extend type Mutation {
    createObsProbesRecord(tenantId: String!, code: String!, name: String!): ObsProbesRecord!
    deleteObsProbesRecord(id: ID!): Boolean!
  }
`;

export const ObsProbesRecordGqlResolvers = {
  Query: {
    getObsProbesRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

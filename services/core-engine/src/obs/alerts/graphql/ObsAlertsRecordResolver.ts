export const ObsAlertsRecordGqlTypeDefs = `
  type ObsAlertsRecord {
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
    getObsAlertsRecord(id: ID!): ObsAlertsRecord
    listObsAlertsRecords(tenantId: String!, limit: Int): [ObsAlertsRecord!]!
  }

  extend type Mutation {
    createObsAlertsRecord(tenantId: String!, code: String!, name: String!): ObsAlertsRecord!
    deleteObsAlertsRecord(id: ID!): Boolean!
  }
`;

export const ObsAlertsRecordGqlResolvers = {
  Query: {
    getObsAlertsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

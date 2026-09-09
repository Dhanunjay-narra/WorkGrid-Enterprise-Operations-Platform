export const CrmForecastingRecordGqlTypeDefs = `
  type CrmForecastingRecord {
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
    getCrmForecastingRecord(id: ID!): CrmForecastingRecord
    listCrmForecastingRecords(tenantId: String!, limit: Int): [CrmForecastingRecord!]!
  }

  extend type Mutation {
    createCrmForecastingRecord(tenantId: String!, code: String!, name: String!): CrmForecastingRecord!
    deleteCrmForecastingRecord(id: ID!): Boolean!
  }
`;

export const CrmForecastingRecordGqlResolvers = {
  Query: {
    getCrmForecastingRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmForecastingRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

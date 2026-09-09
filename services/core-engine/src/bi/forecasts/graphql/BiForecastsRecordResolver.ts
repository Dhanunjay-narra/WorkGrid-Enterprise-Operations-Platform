export const BiForecastsRecordGqlTypeDefs = `
  type BiForecastsRecord {
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
    getBiForecastsRecord(id: ID!): BiForecastsRecord
    listBiForecastsRecords(tenantId: String!, limit: Int): [BiForecastsRecord!]!
  }

  extend type Mutation {
    createBiForecastsRecord(tenantId: String!, code: String!, name: String!): BiForecastsRecord!
    deleteBiForecastsRecord(id: ID!): Boolean!
  }
`;

export const BiForecastsRecordGqlResolvers = {
  Query: {
    getBiForecastsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiForecastsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

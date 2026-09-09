export const BiDashboardsRecordGqlTypeDefs = `
  type BiDashboardsRecord {
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
    getBiDashboardsRecord(id: ID!): BiDashboardsRecord
    listBiDashboardsRecords(tenantId: String!, limit: Int): [BiDashboardsRecord!]!
  }

  extend type Mutation {
    createBiDashboardsRecord(tenantId: String!, code: String!, name: String!): BiDashboardsRecord!
    deleteBiDashboardsRecord(id: ID!): Boolean!
  }
`;

export const BiDashboardsRecordGqlResolvers = {
  Query: {
    getBiDashboardsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "BiDashboardsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

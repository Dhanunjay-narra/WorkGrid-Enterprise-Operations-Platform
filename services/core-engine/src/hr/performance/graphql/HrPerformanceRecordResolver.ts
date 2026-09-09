export const HrPerformanceRecordGqlTypeDefs = `
  type HrPerformanceRecord {
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
    getHrPerformanceRecord(id: ID!): HrPerformanceRecord
    listHrPerformanceRecords(tenantId: String!, limit: Int): [HrPerformanceRecord!]!
  }

  extend type Mutation {
    createHrPerformanceRecord(tenantId: String!, code: String!, name: String!): HrPerformanceRecord!
    deleteHrPerformanceRecord(id: ID!): Boolean!
  }
`;

export const HrPerformanceRecordGqlResolvers = {
  Query: {
    getHrPerformanceRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPerformanceRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

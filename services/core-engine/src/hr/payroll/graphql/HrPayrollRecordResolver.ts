export const HrPayrollRecordGqlTypeDefs = `
  type HrPayrollRecord {
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
    getHrPayrollRecord(id: ID!): HrPayrollRecord
    listHrPayrollRecords(tenantId: String!, limit: Int): [HrPayrollRecord!]!
  }

  extend type Mutation {
    createHrPayrollRecord(tenantId: String!, code: String!, name: String!): HrPayrollRecord!
    deleteHrPayrollRecord(id: ID!): Boolean!
  }
`;

export const HrPayrollRecordGqlResolvers = {
  Query: {
    getHrPayrollRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

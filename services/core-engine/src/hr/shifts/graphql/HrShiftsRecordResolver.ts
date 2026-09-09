export const HrShiftsRecordGqlTypeDefs = `
  type HrShiftsRecord {
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
    getHrShiftsRecord(id: ID!): HrShiftsRecord
    listHrShiftsRecords(tenantId: String!, limit: Int): [HrShiftsRecord!]!
  }

  extend type Mutation {
    createHrShiftsRecord(tenantId: String!, code: String!, name: String!): HrShiftsRecord!
    deleteHrShiftsRecord(id: ID!): Boolean!
  }
`;

export const HrShiftsRecordGqlResolvers = {
  Query: {
    getHrShiftsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrShiftsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

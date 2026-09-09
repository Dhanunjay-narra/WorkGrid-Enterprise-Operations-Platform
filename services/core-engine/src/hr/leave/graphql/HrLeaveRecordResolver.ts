export const HrLeaveRecordGqlTypeDefs = `
  type HrLeaveRecord {
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
    getHrLeaveRecord(id: ID!): HrLeaveRecord
    listHrLeaveRecords(tenantId: String!, limit: Int): [HrLeaveRecord!]!
  }

  extend type Mutation {
    createHrLeaveRecord(tenantId: String!, code: String!, name: String!): HrLeaveRecord!
    deleteHrLeaveRecord(id: ID!): Boolean!
  }
`;

export const HrLeaveRecordGqlResolvers = {
  Query: {
    getHrLeaveRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrLeaveRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

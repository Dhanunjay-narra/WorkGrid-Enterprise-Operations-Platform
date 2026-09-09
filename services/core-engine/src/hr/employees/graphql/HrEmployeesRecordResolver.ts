export const HrEmployeesRecordGqlTypeDefs = `
  type HrEmployeesRecord {
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
    getHrEmployeesRecord(id: ID!): HrEmployeesRecord
    listHrEmployeesRecords(tenantId: String!, limit: Int): [HrEmployeesRecord!]!
  }

  extend type Mutation {
    createHrEmployeesRecord(tenantId: String!, code: String!, name: String!): HrEmployeesRecord!
    deleteHrEmployeesRecord(id: ID!): Boolean!
  }
`;

export const HrEmployeesRecordGqlResolvers = {
  Query: {
    getHrEmployeesRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

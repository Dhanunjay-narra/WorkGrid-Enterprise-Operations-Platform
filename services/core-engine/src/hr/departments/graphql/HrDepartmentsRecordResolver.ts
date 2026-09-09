export const HrDepartmentsRecordGqlTypeDefs = `
  type HrDepartmentsRecord {
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
    getHrDepartmentsRecord(id: ID!): HrDepartmentsRecord
    listHrDepartmentsRecords(tenantId: String!, limit: Int): [HrDepartmentsRecord!]!
  }

  extend type Mutation {
    createHrDepartmentsRecord(tenantId: String!, code: String!, name: String!): HrDepartmentsRecord!
    deleteHrDepartmentsRecord(id: ID!): Boolean!
  }
`;

export const HrDepartmentsRecordGqlResolvers = {
  Query: {
    getHrDepartmentsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

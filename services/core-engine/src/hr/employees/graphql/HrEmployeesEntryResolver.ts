export const HrEmployeesEntryGqlTypeDefs = `
  type HrEmployeesEntry {
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
    getHrEmployeesEntry(id: ID!): HrEmployeesEntry
    listHrEmployeesEntrys(tenantId: String!, limit: Int): [HrEmployeesEntry!]!
  }

  extend type Mutation {
    createHrEmployeesEntry(tenantId: String!, code: String!, name: String!): HrEmployeesEntry!
    deleteHrEmployeesEntry(id: ID!): Boolean!
  }
`;

export const HrEmployeesEntryGqlResolvers = {
  Query: {
    getHrEmployeesEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

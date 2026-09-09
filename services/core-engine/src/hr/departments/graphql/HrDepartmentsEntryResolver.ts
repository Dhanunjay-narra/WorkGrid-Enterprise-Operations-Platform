export const HrDepartmentsEntryGqlTypeDefs = `
  type HrDepartmentsEntry {
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
    getHrDepartmentsEntry(id: ID!): HrDepartmentsEntry
    listHrDepartmentsEntrys(tenantId: String!, limit: Int): [HrDepartmentsEntry!]!
  }

  extend type Mutation {
    createHrDepartmentsEntry(tenantId: String!, code: String!, name: String!): HrDepartmentsEntry!
    deleteHrDepartmentsEntry(id: ID!): Boolean!
  }
`;

export const HrDepartmentsEntryGqlResolvers = {
  Query: {
    getHrDepartmentsEntry: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsEntry", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

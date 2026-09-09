export const HrDepartmentsMappingGqlTypeDefs = `
  type HrDepartmentsMapping {
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
    getHrDepartmentsMapping(id: ID!): HrDepartmentsMapping
    listHrDepartmentsMappings(tenantId: String!, limit: Int): [HrDepartmentsMapping!]!
  }

  extend type Mutation {
    createHrDepartmentsMapping(tenantId: String!, code: String!, name: String!): HrDepartmentsMapping!
    deleteHrDepartmentsMapping(id: ID!): Boolean!
  }
`;

export const HrDepartmentsMappingGqlResolvers = {
  Query: {
    getHrDepartmentsMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

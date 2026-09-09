export const HrPayrollMappingGqlTypeDefs = `
  type HrPayrollMapping {
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
    getHrPayrollMapping(id: ID!): HrPayrollMapping
    listHrPayrollMappings(tenantId: String!, limit: Int): [HrPayrollMapping!]!
  }

  extend type Mutation {
    createHrPayrollMapping(tenantId: String!, code: String!, name: String!): HrPayrollMapping!
    deleteHrPayrollMapping(id: ID!): Boolean!
  }
`;

export const HrPayrollMappingGqlResolvers = {
  Query: {
    getHrPayrollMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

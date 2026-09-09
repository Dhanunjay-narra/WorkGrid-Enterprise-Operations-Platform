export const HrPayrollConfigGqlTypeDefs = `
  type HrPayrollConfig {
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
    getHrPayrollConfig(id: ID!): HrPayrollConfig
    listHrPayrollConfigs(tenantId: String!, limit: Int): [HrPayrollConfig!]!
  }

  extend type Mutation {
    createHrPayrollConfig(tenantId: String!, code: String!, name: String!): HrPayrollConfig!
    deleteHrPayrollConfig(id: ID!): Boolean!
  }
`;

export const HrPayrollConfigGqlResolvers = {
  Query: {
    getHrPayrollConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

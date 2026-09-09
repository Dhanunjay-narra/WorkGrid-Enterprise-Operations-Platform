export const HrEmployeesConfigGqlTypeDefs = `
  type HrEmployeesConfig {
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
    getHrEmployeesConfig(id: ID!): HrEmployeesConfig
    listHrEmployeesConfigs(tenantId: String!, limit: Int): [HrEmployeesConfig!]!
  }

  extend type Mutation {
    createHrEmployeesConfig(tenantId: String!, code: String!, name: String!): HrEmployeesConfig!
    deleteHrEmployeesConfig(id: ID!): Boolean!
  }
`;

export const HrEmployeesConfigGqlResolvers = {
  Query: {
    getHrEmployeesConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const HrDepartmentsConfigGqlTypeDefs = `
  type HrDepartmentsConfig {
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
    getHrDepartmentsConfig(id: ID!): HrDepartmentsConfig
    listHrDepartmentsConfigs(tenantId: String!, limit: Int): [HrDepartmentsConfig!]!
  }

  extend type Mutation {
    createHrDepartmentsConfig(tenantId: String!, code: String!, name: String!): HrDepartmentsConfig!
    deleteHrDepartmentsConfig(id: ID!): Boolean!
  }
`;

export const HrDepartmentsConfigGqlResolvers = {
  Query: {
    getHrDepartmentsConfig: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsConfig", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

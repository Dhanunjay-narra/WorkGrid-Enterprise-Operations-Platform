export const HrEmployeesThresholdGqlTypeDefs = `
  type HrEmployeesThreshold {
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
    getHrEmployeesThreshold(id: ID!): HrEmployeesThreshold
    listHrEmployeesThresholds(tenantId: String!, limit: Int): [HrEmployeesThreshold!]!
  }

  extend type Mutation {
    createHrEmployeesThreshold(tenantId: String!, code: String!, name: String!): HrEmployeesThreshold!
    deleteHrEmployeesThreshold(id: ID!): Boolean!
  }
`;

export const HrEmployeesThresholdGqlResolvers = {
  Query: {
    getHrEmployeesThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

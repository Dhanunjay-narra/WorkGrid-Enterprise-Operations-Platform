export const HrEmployeesBatchGqlTypeDefs = `
  type HrEmployeesBatch {
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
    getHrEmployeesBatch(id: ID!): HrEmployeesBatch
    listHrEmployeesBatchs(tenantId: String!, limit: Int): [HrEmployeesBatch!]!
  }

  extend type Mutation {
    createHrEmployeesBatch(tenantId: String!, code: String!, name: String!): HrEmployeesBatch!
    deleteHrEmployeesBatch(id: ID!): Boolean!
  }
`;

export const HrEmployeesBatchGqlResolvers = {
  Query: {
    getHrEmployeesBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

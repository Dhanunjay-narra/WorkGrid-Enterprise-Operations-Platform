export const HrDepartmentsBatchGqlTypeDefs = `
  type HrDepartmentsBatch {
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
    getHrDepartmentsBatch(id: ID!): HrDepartmentsBatch
    listHrDepartmentsBatchs(tenantId: String!, limit: Int): [HrDepartmentsBatch!]!
  }

  extend type Mutation {
    createHrDepartmentsBatch(tenantId: String!, code: String!, name: String!): HrDepartmentsBatch!
    deleteHrDepartmentsBatch(id: ID!): Boolean!
  }
`;

export const HrDepartmentsBatchGqlResolvers = {
  Query: {
    getHrDepartmentsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

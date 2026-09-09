export const HrPayrollBatchGqlTypeDefs = `
  type HrPayrollBatch {
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
    getHrPayrollBatch(id: ID!): HrPayrollBatch
    listHrPayrollBatchs(tenantId: String!, limit: Int): [HrPayrollBatch!]!
  }

  extend type Mutation {
    createHrPayrollBatch(tenantId: String!, code: String!, name: String!): HrPayrollBatch!
    deleteHrPayrollBatch(id: ID!): Boolean!
  }
`;

export const HrPayrollBatchGqlResolvers = {
  Query: {
    getHrPayrollBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

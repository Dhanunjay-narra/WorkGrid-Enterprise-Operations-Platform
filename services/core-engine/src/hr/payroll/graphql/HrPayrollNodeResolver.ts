export const HrPayrollNodeGqlTypeDefs = `
  type HrPayrollNode {
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
    getHrPayrollNode(id: ID!): HrPayrollNode
    listHrPayrollNodes(tenantId: String!, limit: Int): [HrPayrollNode!]!
  }

  extend type Mutation {
    createHrPayrollNode(tenantId: String!, code: String!, name: String!): HrPayrollNode!
    deleteHrPayrollNode(id: ID!): Boolean!
  }
`;

export const HrPayrollNodeGqlResolvers = {
  Query: {
    getHrPayrollNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrPayrollNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const HrEmployeesNodeGqlTypeDefs = `
  type HrEmployeesNode {
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
    getHrEmployeesNode(id: ID!): HrEmployeesNode
    listHrEmployeesNodes(tenantId: String!, limit: Int): [HrEmployeesNode!]!
  }

  extend type Mutation {
    createHrEmployeesNode(tenantId: String!, code: String!, name: String!): HrEmployeesNode!
    deleteHrEmployeesNode(id: ID!): Boolean!
  }
`;

export const HrEmployeesNodeGqlResolvers = {
  Query: {
    getHrEmployeesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrEmployeesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const HrDepartmentsNodeGqlTypeDefs = `
  type HrDepartmentsNode {
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
    getHrDepartmentsNode(id: ID!): HrDepartmentsNode
    listHrDepartmentsNodes(tenantId: String!, limit: Int): [HrDepartmentsNode!]!
  }

  extend type Mutation {
    createHrDepartmentsNode(tenantId: String!, code: String!, name: String!): HrDepartmentsNode!
    deleteHrDepartmentsNode(id: ID!): Boolean!
  }
`;

export const HrDepartmentsNodeGqlResolvers = {
  Query: {
    getHrDepartmentsNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "HrDepartmentsNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

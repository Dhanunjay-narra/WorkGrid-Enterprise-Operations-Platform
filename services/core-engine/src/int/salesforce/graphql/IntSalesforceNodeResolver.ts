export const IntSalesforceNodeGqlTypeDefs = `
  type IntSalesforceNode {
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
    getIntSalesforceNode(id: ID!): IntSalesforceNode
    listIntSalesforceNodes(tenantId: String!, limit: Int): [IntSalesforceNode!]!
  }

  extend type Mutation {
    createIntSalesforceNode(tenantId: String!, code: String!, name: String!): IntSalesforceNode!
    deleteIntSalesforceNode(id: ID!): Boolean!
  }
`;

export const IntSalesforceNodeGqlResolvers = {
  Query: {
    getIntSalesforceNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

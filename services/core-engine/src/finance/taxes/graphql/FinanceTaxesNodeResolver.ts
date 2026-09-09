export const FinanceTaxesNodeGqlTypeDefs = `
  type FinanceTaxesNode {
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
    getFinanceTaxesNode(id: ID!): FinanceTaxesNode
    listFinanceTaxesNodes(tenantId: String!, limit: Int): [FinanceTaxesNode!]!
  }

  extend type Mutation {
    createFinanceTaxesNode(tenantId: String!, code: String!, name: String!): FinanceTaxesNode!
    deleteFinanceTaxesNode(id: ID!): Boolean!
  }
`;

export const FinanceTaxesNodeGqlResolvers = {
  Query: {
    getFinanceTaxesNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

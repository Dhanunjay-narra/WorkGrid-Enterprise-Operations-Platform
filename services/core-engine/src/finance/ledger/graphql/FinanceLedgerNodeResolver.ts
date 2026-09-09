export const FinanceLedgerNodeGqlTypeDefs = `
  type FinanceLedgerNode {
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
    getFinanceLedgerNode(id: ID!): FinanceLedgerNode
    listFinanceLedgerNodes(tenantId: String!, limit: Int): [FinanceLedgerNode!]!
  }

  extend type Mutation {
    createFinanceLedgerNode(tenantId: String!, code: String!, name: String!): FinanceLedgerNode!
    deleteFinanceLedgerNode(id: ID!): Boolean!
  }
`;

export const FinanceLedgerNodeGqlResolvers = {
  Query: {
    getFinanceLedgerNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

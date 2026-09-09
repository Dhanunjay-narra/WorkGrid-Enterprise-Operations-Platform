export const FinanceLedgerPayloadGqlTypeDefs = `
  type FinanceLedgerPayload {
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
    getFinanceLedgerPayload(id: ID!): FinanceLedgerPayload
    listFinanceLedgerPayloads(tenantId: String!, limit: Int): [FinanceLedgerPayload!]!
  }

  extend type Mutation {
    createFinanceLedgerPayload(tenantId: String!, code: String!, name: String!): FinanceLedgerPayload!
    deleteFinanceLedgerPayload(id: ID!): Boolean!
  }
`;

export const FinanceLedgerPayloadGqlResolvers = {
  Query: {
    getFinanceLedgerPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

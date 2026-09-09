export const FinanceBankingPayloadGqlTypeDefs = `
  type FinanceBankingPayload {
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
    getFinanceBankingPayload(id: ID!): FinanceBankingPayload
    listFinanceBankingPayloads(tenantId: String!, limit: Int): [FinanceBankingPayload!]!
  }

  extend type Mutation {
    createFinanceBankingPayload(tenantId: String!, code: String!, name: String!): FinanceBankingPayload!
    deleteFinanceBankingPayload(id: ID!): Boolean!
  }
`;

export const FinanceBankingPayloadGqlResolvers = {
  Query: {
    getFinanceBankingPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

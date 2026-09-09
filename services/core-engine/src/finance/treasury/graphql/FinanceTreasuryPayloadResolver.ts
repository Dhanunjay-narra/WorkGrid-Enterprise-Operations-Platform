export const FinanceTreasuryPayloadGqlTypeDefs = `
  type FinanceTreasuryPayload {
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
    getFinanceTreasuryPayload(id: ID!): FinanceTreasuryPayload
    listFinanceTreasuryPayloads(tenantId: String!, limit: Int): [FinanceTreasuryPayload!]!
  }

  extend type Mutation {
    createFinanceTreasuryPayload(tenantId: String!, code: String!, name: String!): FinanceTreasuryPayload!
    deleteFinanceTreasuryPayload(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryPayloadGqlResolvers = {
  Query: {
    getFinanceTreasuryPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

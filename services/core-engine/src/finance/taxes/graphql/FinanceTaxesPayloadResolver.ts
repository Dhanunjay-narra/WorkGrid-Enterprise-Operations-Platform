export const FinanceTaxesPayloadGqlTypeDefs = `
  type FinanceTaxesPayload {
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
    getFinanceTaxesPayload(id: ID!): FinanceTaxesPayload
    listFinanceTaxesPayloads(tenantId: String!, limit: Int): [FinanceTaxesPayload!]!
  }

  extend type Mutation {
    createFinanceTaxesPayload(tenantId: String!, code: String!, name: String!): FinanceTaxesPayload!
    deleteFinanceTaxesPayload(id: ID!): Boolean!
  }
`;

export const FinanceTaxesPayloadGqlResolvers = {
  Query: {
    getFinanceTaxesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

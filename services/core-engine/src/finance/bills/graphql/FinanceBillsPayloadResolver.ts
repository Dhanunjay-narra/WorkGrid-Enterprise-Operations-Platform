export const FinanceBillsPayloadGqlTypeDefs = `
  type FinanceBillsPayload {
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
    getFinanceBillsPayload(id: ID!): FinanceBillsPayload
    listFinanceBillsPayloads(tenantId: String!, limit: Int): [FinanceBillsPayload!]!
  }

  extend type Mutation {
    createFinanceBillsPayload(tenantId: String!, code: String!, name: String!): FinanceBillsPayload!
    deleteFinanceBillsPayload(id: ID!): Boolean!
  }
`;

export const FinanceBillsPayloadGqlResolvers = {
  Query: {
    getFinanceBillsPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBillsPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

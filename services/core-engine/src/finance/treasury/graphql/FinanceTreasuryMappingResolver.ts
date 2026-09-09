export const FinanceTreasuryMappingGqlTypeDefs = `
  type FinanceTreasuryMapping {
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
    getFinanceTreasuryMapping(id: ID!): FinanceTreasuryMapping
    listFinanceTreasuryMappings(tenantId: String!, limit: Int): [FinanceTreasuryMapping!]!
  }

  extend type Mutation {
    createFinanceTreasuryMapping(tenantId: String!, code: String!, name: String!): FinanceTreasuryMapping!
    deleteFinanceTreasuryMapping(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryMappingGqlResolvers = {
  Query: {
    getFinanceTreasuryMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const FinanceTaxesMappingGqlTypeDefs = `
  type FinanceTaxesMapping {
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
    getFinanceTaxesMapping(id: ID!): FinanceTaxesMapping
    listFinanceTaxesMappings(tenantId: String!, limit: Int): [FinanceTaxesMapping!]!
  }

  extend type Mutation {
    createFinanceTaxesMapping(tenantId: String!, code: String!, name: String!): FinanceTaxesMapping!
    deleteFinanceTaxesMapping(id: ID!): Boolean!
  }
`;

export const FinanceTaxesMappingGqlResolvers = {
  Query: {
    getFinanceTaxesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

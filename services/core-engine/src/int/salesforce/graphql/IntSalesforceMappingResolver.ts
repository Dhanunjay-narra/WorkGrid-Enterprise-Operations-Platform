export const IntSalesforceMappingGqlTypeDefs = `
  type IntSalesforceMapping {
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
    getIntSalesforceMapping(id: ID!): IntSalesforceMapping
    listIntSalesforceMappings(tenantId: String!, limit: Int): [IntSalesforceMapping!]!
  }

  extend type Mutation {
    createIntSalesforceMapping(tenantId: String!, code: String!, name: String!): IntSalesforceMapping!
    deleteIntSalesforceMapping(id: ID!): Boolean!
  }
`;

export const IntSalesforceMappingGqlResolvers = {
  Query: {
    getIntSalesforceMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

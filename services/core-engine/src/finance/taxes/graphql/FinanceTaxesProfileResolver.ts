export const FinanceTaxesProfileGqlTypeDefs = `
  type FinanceTaxesProfile {
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
    getFinanceTaxesProfile(id: ID!): FinanceTaxesProfile
    listFinanceTaxesProfiles(tenantId: String!, limit: Int): [FinanceTaxesProfile!]!
  }

  extend type Mutation {
    createFinanceTaxesProfile(tenantId: String!, code: String!, name: String!): FinanceTaxesProfile!
    deleteFinanceTaxesProfile(id: ID!): Boolean!
  }
`;

export const FinanceTaxesProfileGqlResolvers = {
  Query: {
    getFinanceTaxesProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

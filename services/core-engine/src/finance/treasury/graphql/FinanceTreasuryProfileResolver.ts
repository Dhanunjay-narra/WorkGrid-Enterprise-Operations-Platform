export const FinanceTreasuryProfileGqlTypeDefs = `
  type FinanceTreasuryProfile {
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
    getFinanceTreasuryProfile(id: ID!): FinanceTreasuryProfile
    listFinanceTreasuryProfiles(tenantId: String!, limit: Int): [FinanceTreasuryProfile!]!
  }

  extend type Mutation {
    createFinanceTreasuryProfile(tenantId: String!, code: String!, name: String!): FinanceTreasuryProfile!
    deleteFinanceTreasuryProfile(id: ID!): Boolean!
  }
`;

export const FinanceTreasuryProfileGqlResolvers = {
  Query: {
    getFinanceTreasuryProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTreasuryProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

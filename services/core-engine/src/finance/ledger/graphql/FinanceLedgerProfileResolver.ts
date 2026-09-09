export const FinanceLedgerProfileGqlTypeDefs = `
  type FinanceLedgerProfile {
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
    getFinanceLedgerProfile(id: ID!): FinanceLedgerProfile
    listFinanceLedgerProfiles(tenantId: String!, limit: Int): [FinanceLedgerProfile!]!
  }

  extend type Mutation {
    createFinanceLedgerProfile(tenantId: String!, code: String!, name: String!): FinanceLedgerProfile!
    deleteFinanceLedgerProfile(id: ID!): Boolean!
  }
`;

export const FinanceLedgerProfileGqlResolvers = {
  Query: {
    getFinanceLedgerProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceLedgerProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

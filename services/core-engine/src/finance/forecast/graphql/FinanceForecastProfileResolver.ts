export const FinanceForecastProfileGqlTypeDefs = `
  type FinanceForecastProfile {
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
    getFinanceForecastProfile(id: ID!): FinanceForecastProfile
    listFinanceForecastProfiles(tenantId: String!, limit: Int): [FinanceForecastProfile!]!
  }

  extend type Mutation {
    createFinanceForecastProfile(tenantId: String!, code: String!, name: String!): FinanceForecastProfile!
    deleteFinanceForecastProfile(id: ID!): Boolean!
  }
`;

export const FinanceForecastProfileGqlResolvers = {
  Query: {
    getFinanceForecastProfile: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceForecastProfile", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

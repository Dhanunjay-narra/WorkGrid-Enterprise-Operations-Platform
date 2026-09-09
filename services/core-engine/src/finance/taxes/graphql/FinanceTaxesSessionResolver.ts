export const FinanceTaxesSessionGqlTypeDefs = `
  type FinanceTaxesSession {
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
    getFinanceTaxesSession(id: ID!): FinanceTaxesSession
    listFinanceTaxesSessions(tenantId: String!, limit: Int): [FinanceTaxesSession!]!
  }

  extend type Mutation {
    createFinanceTaxesSession(tenantId: String!, code: String!, name: String!): FinanceTaxesSession!
    deleteFinanceTaxesSession(id: ID!): Boolean!
  }
`;

export const FinanceTaxesSessionGqlResolvers = {
  Query: {
    getFinanceTaxesSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

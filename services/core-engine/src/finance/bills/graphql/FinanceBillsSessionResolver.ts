export const FinanceBillsSessionGqlTypeDefs = `
  type FinanceBillsSession {
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
    getFinanceBillsSession(id: ID!): FinanceBillsSession
    listFinanceBillsSessions(tenantId: String!, limit: Int): [FinanceBillsSession!]!
  }

  extend type Mutation {
    createFinanceBillsSession(tenantId: String!, code: String!, name: String!): FinanceBillsSession!
    deleteFinanceBillsSession(id: ID!): Boolean!
  }
`;

export const FinanceBillsSessionGqlResolvers = {
  Query: {
    getFinanceBillsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBillsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

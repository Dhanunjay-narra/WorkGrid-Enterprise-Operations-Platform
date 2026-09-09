export const FinanceBankingEventGqlTypeDefs = `
  type FinanceBankingEvent {
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
    getFinanceBankingEvent(id: ID!): FinanceBankingEvent
    listFinanceBankingEvents(tenantId: String!, limit: Int): [FinanceBankingEvent!]!
  }

  extend type Mutation {
    createFinanceBankingEvent(tenantId: String!, code: String!, name: String!): FinanceBankingEvent!
    deleteFinanceBankingEvent(id: ID!): Boolean!
  }
`;

export const FinanceBankingEventGqlResolvers = {
  Query: {
    getFinanceBankingEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceBankingEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const FinanceTaxesEventGqlTypeDefs = `
  type FinanceTaxesEvent {
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
    getFinanceTaxesEvent(id: ID!): FinanceTaxesEvent
    listFinanceTaxesEvents(tenantId: String!, limit: Int): [FinanceTaxesEvent!]!
  }

  extend type Mutation {
    createFinanceTaxesEvent(tenantId: String!, code: String!, name: String!): FinanceTaxesEvent!
    deleteFinanceTaxesEvent(id: ID!): Boolean!
  }
`;

export const FinanceTaxesEventGqlResolvers = {
  Query: {
    getFinanceTaxesEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "FinanceTaxesEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

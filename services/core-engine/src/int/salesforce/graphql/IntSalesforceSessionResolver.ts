export const IntSalesforceSessionGqlTypeDefs = `
  type IntSalesforceSession {
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
    getIntSalesforceSession(id: ID!): IntSalesforceSession
    listIntSalesforceSessions(tenantId: String!, limit: Int): [IntSalesforceSession!]!
  }

  extend type Mutation {
    createIntSalesforceSession(tenantId: String!, code: String!, name: String!): IntSalesforceSession!
    deleteIntSalesforceSession(id: ID!): Boolean!
  }
`;

export const IntSalesforceSessionGqlResolvers = {
  Query: {
    getIntSalesforceSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

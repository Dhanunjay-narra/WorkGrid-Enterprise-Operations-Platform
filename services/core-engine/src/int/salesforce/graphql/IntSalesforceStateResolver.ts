export const IntSalesforceStateGqlTypeDefs = `
  type IntSalesforceState {
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
    getIntSalesforceState(id: ID!): IntSalesforceState
    listIntSalesforceStates(tenantId: String!, limit: Int): [IntSalesforceState!]!
  }

  extend type Mutation {
    createIntSalesforceState(tenantId: String!, code: String!, name: String!): IntSalesforceState!
    deleteIntSalesforceState(id: ID!): Boolean!
  }
`;

export const IntSalesforceStateGqlResolvers = {
  Query: {
    getIntSalesforceState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

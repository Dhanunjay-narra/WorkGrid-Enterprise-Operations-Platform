export const IntSalesforceThresholdGqlTypeDefs = `
  type IntSalesforceThreshold {
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
    getIntSalesforceThreshold(id: ID!): IntSalesforceThreshold
    listIntSalesforceThresholds(tenantId: String!, limit: Int): [IntSalesforceThreshold!]!
  }

  extend type Mutation {
    createIntSalesforceThreshold(tenantId: String!, code: String!, name: String!): IntSalesforceThreshold!
    deleteIntSalesforceThreshold(id: ID!): Boolean!
  }
`;

export const IntSalesforceThresholdGqlResolvers = {
  Query: {
    getIntSalesforceThreshold: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSalesforceThreshold", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

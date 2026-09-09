export const IntStripeMappingGqlTypeDefs = `
  type IntStripeMapping {
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
    getIntStripeMapping(id: ID!): IntStripeMapping
    listIntStripeMappings(tenantId: String!, limit: Int): [IntStripeMapping!]!
  }

  extend type Mutation {
    createIntStripeMapping(tenantId: String!, code: String!, name: String!): IntStripeMapping!
    deleteIntStripeMapping(id: ID!): Boolean!
  }
`;

export const IntStripeMappingGqlResolvers = {
  Query: {
    getIntStripeMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

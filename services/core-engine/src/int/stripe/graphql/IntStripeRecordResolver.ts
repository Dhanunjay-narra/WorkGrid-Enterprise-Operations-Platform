export const IntStripeRecordGqlTypeDefs = `
  type IntStripeRecord {
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
    getIntStripeRecord(id: ID!): IntStripeRecord
    listIntStripeRecords(tenantId: String!, limit: Int): [IntStripeRecord!]!
  }

  extend type Mutation {
    createIntStripeRecord(tenantId: String!, code: String!, name: String!): IntStripeRecord!
    deleteIntStripeRecord(id: ID!): Boolean!
  }
`;

export const IntStripeRecordGqlResolvers = {
  Query: {
    getIntStripeRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntStripeRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

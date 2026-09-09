export const SupportSurveysStateGqlTypeDefs = `
  type SupportSurveysState {
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
    getSupportSurveysState(id: ID!): SupportSurveysState
    listSupportSurveysStates(tenantId: String!, limit: Int): [SupportSurveysState!]!
  }

  extend type Mutation {
    createSupportSurveysState(tenantId: String!, code: String!, name: String!): SupportSurveysState!
    deleteSupportSurveysState(id: ID!): Boolean!
  }
`;

export const SupportSurveysStateGqlResolvers = {
  Query: {
    getSupportSurveysState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

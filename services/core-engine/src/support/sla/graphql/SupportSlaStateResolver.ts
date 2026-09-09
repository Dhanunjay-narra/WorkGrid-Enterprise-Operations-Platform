export const SupportSlaStateGqlTypeDefs = `
  type SupportSlaState {
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
    getSupportSlaState(id: ID!): SupportSlaState
    listSupportSlaStates(tenantId: String!, limit: Int): [SupportSlaState!]!
  }

  extend type Mutation {
    createSupportSlaState(tenantId: String!, code: String!, name: String!): SupportSlaState!
    deleteSupportSlaState(id: ID!): Boolean!
  }
`;

export const SupportSlaStateGqlResolvers = {
  Query: {
    getSupportSlaState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

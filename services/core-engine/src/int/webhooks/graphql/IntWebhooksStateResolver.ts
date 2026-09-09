export const IntWebhooksStateGqlTypeDefs = `
  type IntWebhooksState {
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
    getIntWebhooksState(id: ID!): IntWebhooksState
    listIntWebhooksStates(tenantId: String!, limit: Int): [IntWebhooksState!]!
  }

  extend type Mutation {
    createIntWebhooksState(tenantId: String!, code: String!, name: String!): IntWebhooksState!
    deleteIntWebhooksState(id: ID!): Boolean!
  }
`;

export const IntWebhooksStateGqlResolvers = {
  Query: {
    getIntWebhooksState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntWebhooksState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

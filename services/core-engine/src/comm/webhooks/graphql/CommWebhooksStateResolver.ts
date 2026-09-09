export const CommWebhooksStateGqlTypeDefs = `
  type CommWebhooksState {
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
    getCommWebhooksState(id: ID!): CommWebhooksState
    listCommWebhooksStates(tenantId: String!, limit: Int): [CommWebhooksState!]!
  }

  extend type Mutation {
    createCommWebhooksState(tenantId: String!, code: String!, name: String!): CommWebhooksState!
    deleteCommWebhooksState(id: ID!): Boolean!
  }
`;

export const CommWebhooksStateGqlResolvers = {
  Query: {
    getCommWebhooksState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommWebhooksState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

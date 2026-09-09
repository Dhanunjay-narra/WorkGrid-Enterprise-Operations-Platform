export const IntSlackStateGqlTypeDefs = `
  type IntSlackState {
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
    getIntSlackState(id: ID!): IntSlackState
    listIntSlackStates(tenantId: String!, limit: Int): [IntSlackState!]!
  }

  extend type Mutation {
    createIntSlackState(tenantId: String!, code: String!, name: String!): IntSlackState!
    deleteIntSlackState(id: ID!): Boolean!
  }
`;

export const IntSlackStateGqlResolvers = {
  Query: {
    getIntSlackState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntSlackState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

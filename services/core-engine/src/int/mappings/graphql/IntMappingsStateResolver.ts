export const IntMappingsStateGqlTypeDefs = `
  type IntMappingsState {
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
    getIntMappingsState(id: ID!): IntMappingsState
    listIntMappingsStates(tenantId: String!, limit: Int): [IntMappingsState!]!
  }

  extend type Mutation {
    createIntMappingsState(tenantId: String!, code: String!, name: String!): IntMappingsState!
    deleteIntMappingsState(id: ID!): Boolean!
  }
`;

export const IntMappingsStateGqlResolvers = {
  Query: {
    getIntMappingsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IntMappingsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

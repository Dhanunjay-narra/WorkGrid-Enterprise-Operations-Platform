export const SecurityStateGqlTypeDefs = `
  type SecurityState {
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
    getSecurityState(id: ID!): SecurityState
    listSecurityStates(tenantId: String!, limit: Int): [SecurityState!]!
  }

  extend type Mutation {
    createSecurityState(tenantId: String!, code: String!, name: String!): SecurityState!
    deleteSecurityState(id: ID!): Boolean!
  }
`;

export const SecurityStateGqlResolvers = {
  Query: {
    getSecurityState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SecurityState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

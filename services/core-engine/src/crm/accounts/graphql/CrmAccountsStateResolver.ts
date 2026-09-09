export const CrmAccountsStateGqlTypeDefs = `
  type CrmAccountsState {
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
    getCrmAccountsState(id: ID!): CrmAccountsState
    listCrmAccountsStates(tenantId: String!, limit: Int): [CrmAccountsState!]!
  }

  extend type Mutation {
    createCrmAccountsState(tenantId: String!, code: String!, name: String!): CrmAccountsState!
    deleteCrmAccountsState(id: ID!): Boolean!
  }
`;

export const CrmAccountsStateGqlResolvers = {
  Query: {
    getCrmAccountsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const CrmContactsStateGqlTypeDefs = `
  type CrmContactsState {
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
    getCrmContactsState(id: ID!): CrmContactsState
    listCrmContactsStates(tenantId: String!, limit: Int): [CrmContactsState!]!
  }

  extend type Mutation {
    createCrmContactsState(tenantId: String!, code: String!, name: String!): CrmContactsState!
    deleteCrmContactsState(id: ID!): Boolean!
  }
`;

export const CrmContactsStateGqlResolvers = {
  Query: {
    getCrmContactsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmContactsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

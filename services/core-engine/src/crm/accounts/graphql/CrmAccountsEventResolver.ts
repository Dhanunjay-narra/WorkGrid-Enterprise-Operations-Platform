export const CrmAccountsEventGqlTypeDefs = `
  type CrmAccountsEvent {
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
    getCrmAccountsEvent(id: ID!): CrmAccountsEvent
    listCrmAccountsEvents(tenantId: String!, limit: Int): [CrmAccountsEvent!]!
  }

  extend type Mutation {
    createCrmAccountsEvent(tenantId: String!, code: String!, name: String!): CrmAccountsEvent!
    deleteCrmAccountsEvent(id: ID!): Boolean!
  }
`;

export const CrmAccountsEventGqlResolvers = {
  Query: {
    getCrmAccountsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

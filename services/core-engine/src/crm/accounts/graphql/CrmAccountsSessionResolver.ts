export const CrmAccountsSessionGqlTypeDefs = `
  type CrmAccountsSession {
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
    getCrmAccountsSession(id: ID!): CrmAccountsSession
    listCrmAccountsSessions(tenantId: String!, limit: Int): [CrmAccountsSession!]!
  }

  extend type Mutation {
    createCrmAccountsSession(tenantId: String!, code: String!, name: String!): CrmAccountsSession!
    deleteCrmAccountsSession(id: ID!): Boolean!
  }
`;

export const CrmAccountsSessionGqlResolvers = {
  Query: {
    getCrmAccountsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmAccountsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

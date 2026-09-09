export const CrmDealsSessionGqlTypeDefs = `
  type CrmDealsSession {
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
    getCrmDealsSession(id: ID!): CrmDealsSession
    listCrmDealsSessions(tenantId: String!, limit: Int): [CrmDealsSession!]!
  }

  extend type Mutation {
    createCrmDealsSession(tenantId: String!, code: String!, name: String!): CrmDealsSession!
    deleteCrmDealsSession(id: ID!): Boolean!
  }
`;

export const CrmDealsSessionGqlResolvers = {
  Query: {
    getCrmDealsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

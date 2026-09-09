export const CrmLeadsSessionGqlTypeDefs = `
  type CrmLeadsSession {
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
    getCrmLeadsSession(id: ID!): CrmLeadsSession
    listCrmLeadsSessions(tenantId: String!, limit: Int): [CrmLeadsSession!]!
  }

  extend type Mutation {
    createCrmLeadsSession(tenantId: String!, code: String!, name: String!): CrmLeadsSession!
    deleteCrmLeadsSession(id: ID!): Boolean!
  }
`;

export const CrmLeadsSessionGqlResolvers = {
  Query: {
    getCrmLeadsSession: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsSession", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

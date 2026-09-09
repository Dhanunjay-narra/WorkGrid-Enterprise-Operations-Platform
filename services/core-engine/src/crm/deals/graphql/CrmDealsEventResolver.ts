export const CrmDealsEventGqlTypeDefs = `
  type CrmDealsEvent {
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
    getCrmDealsEvent(id: ID!): CrmDealsEvent
    listCrmDealsEvents(tenantId: String!, limit: Int): [CrmDealsEvent!]!
  }

  extend type Mutation {
    createCrmDealsEvent(tenantId: String!, code: String!, name: String!): CrmDealsEvent!
    deleteCrmDealsEvent(id: ID!): Boolean!
  }
`;

export const CrmDealsEventGqlResolvers = {
  Query: {
    getCrmDealsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

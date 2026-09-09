export const CrmLeadsEventGqlTypeDefs = `
  type CrmLeadsEvent {
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
    getCrmLeadsEvent(id: ID!): CrmLeadsEvent
    listCrmLeadsEvents(tenantId: String!, limit: Int): [CrmLeadsEvent!]!
  }

  extend type Mutation {
    createCrmLeadsEvent(tenantId: String!, code: String!, name: String!): CrmLeadsEvent!
    deleteCrmLeadsEvent(id: ID!): Boolean!
  }
`;

export const CrmLeadsEventGqlResolvers = {
  Query: {
    getCrmLeadsEvent: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsEvent", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

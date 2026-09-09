export const CrmLeadsStateGqlTypeDefs = `
  type CrmLeadsState {
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
    getCrmLeadsState(id: ID!): CrmLeadsState
    listCrmLeadsStates(tenantId: String!, limit: Int): [CrmLeadsState!]!
  }

  extend type Mutation {
    createCrmLeadsState(tenantId: String!, code: String!, name: String!): CrmLeadsState!
    deleteCrmLeadsState(id: ID!): Boolean!
  }
`;

export const CrmLeadsStateGqlResolvers = {
  Query: {
    getCrmLeadsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const CrmDealsStateGqlTypeDefs = `
  type CrmDealsState {
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
    getCrmDealsState(id: ID!): CrmDealsState
    listCrmDealsStates(tenantId: String!, limit: Int): [CrmDealsState!]!
  }

  extend type Mutation {
    createCrmDealsState(tenantId: String!, code: String!, name: String!): CrmDealsState!
    deleteCrmDealsState(id: ID!): Boolean!
  }
`;

export const CrmDealsStateGqlResolvers = {
  Query: {
    getCrmDealsState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmDealsState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

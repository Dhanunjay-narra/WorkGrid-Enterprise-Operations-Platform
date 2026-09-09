export const CrmHealthStateGqlTypeDefs = `
  type CrmHealthState {
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
    getCrmHealthState(id: ID!): CrmHealthState
    listCrmHealthStates(tenantId: String!, limit: Int): [CrmHealthState!]!
  }

  extend type Mutation {
    createCrmHealthState(tenantId: String!, code: String!, name: String!): CrmHealthState!
    deleteCrmHealthState(id: ID!): Boolean!
  }
`;

export const CrmHealthStateGqlResolvers = {
  Query: {
    getCrmHealthState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmHealthState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

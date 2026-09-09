export const TenancyStateGqlTypeDefs = `
  type TenancyState {
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
    getTenancyState(id: ID!): TenancyState
    listTenancyStates(tenantId: String!, limit: Int): [TenancyState!]!
  }

  extend type Mutation {
    createTenancyState(tenantId: String!, code: String!, name: String!): TenancyState!
    deleteTenancyState(id: ID!): Boolean!
  }
`;

export const TenancyStateGqlResolvers = {
  Query: {
    getTenancyState: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "TenancyState", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

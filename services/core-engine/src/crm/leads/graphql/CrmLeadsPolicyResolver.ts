export const CrmLeadsPolicyGqlTypeDefs = `
  type CrmLeadsPolicy {
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
    getCrmLeadsPolicy(id: ID!): CrmLeadsPolicy
    listCrmLeadsPolicys(tenantId: String!, limit: Int): [CrmLeadsPolicy!]!
  }

  extend type Mutation {
    createCrmLeadsPolicy(tenantId: String!, code: String!, name: String!): CrmLeadsPolicy!
    deleteCrmLeadsPolicy(id: ID!): Boolean!
  }
`;

export const CrmLeadsPolicyGqlResolvers = {
  Query: {
    getCrmLeadsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CrmLeadsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

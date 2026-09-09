export const DmsVersionsPolicyGqlTypeDefs = `
  type DmsVersionsPolicy {
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
    getDmsVersionsPolicy(id: ID!): DmsVersionsPolicy
    listDmsVersionsPolicys(tenantId: String!, limit: Int): [DmsVersionsPolicy!]!
  }

  extend type Mutation {
    createDmsVersionsPolicy(tenantId: String!, code: String!, name: String!): DmsVersionsPolicy!
    deleteDmsVersionsPolicy(id: ID!): Boolean!
  }
`;

export const DmsVersionsPolicyGqlResolvers = {
  Query: {
    getDmsVersionsPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsVersionsPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

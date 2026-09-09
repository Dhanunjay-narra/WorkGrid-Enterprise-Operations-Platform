export const DmsOcrPolicyGqlTypeDefs = `
  type DmsOcrPolicy {
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
    getDmsOcrPolicy(id: ID!): DmsOcrPolicy
    listDmsOcrPolicys(tenantId: String!, limit: Int): [DmsOcrPolicy!]!
  }

  extend type Mutation {
    createDmsOcrPolicy(tenantId: String!, code: String!, name: String!): DmsOcrPolicy!
    deleteDmsOcrPolicy(id: ID!): Boolean!
  }
`;

export const DmsOcrPolicyGqlResolvers = {
  Query: {
    getDmsOcrPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsOcrPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

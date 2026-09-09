export const DmsSignaturesPolicyGqlTypeDefs = `
  type DmsSignaturesPolicy {
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
    getDmsSignaturesPolicy(id: ID!): DmsSignaturesPolicy
    listDmsSignaturesPolicys(tenantId: String!, limit: Int): [DmsSignaturesPolicy!]!
  }

  extend type Mutation {
    createDmsSignaturesPolicy(tenantId: String!, code: String!, name: String!): DmsSignaturesPolicy!
    deleteDmsSignaturesPolicy(id: ID!): Boolean!
  }
`;

export const DmsSignaturesPolicyGqlResolvers = {
  Query: {
    getDmsSignaturesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "DmsSignaturesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

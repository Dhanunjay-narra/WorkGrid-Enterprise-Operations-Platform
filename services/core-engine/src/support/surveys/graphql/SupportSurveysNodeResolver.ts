export const SupportSurveysNodeGqlTypeDefs = `
  type SupportSurveysNode {
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
    getSupportSurveysNode(id: ID!): SupportSurveysNode
    listSupportSurveysNodes(tenantId: String!, limit: Int): [SupportSurveysNode!]!
  }

  extend type Mutation {
    createSupportSurveysNode(tenantId: String!, code: String!, name: String!): SupportSurveysNode!
    deleteSupportSurveysNode(id: ID!): Boolean!
  }
`;

export const SupportSurveysNodeGqlResolvers = {
  Query: {
    getSupportSurveysNode: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysNode", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

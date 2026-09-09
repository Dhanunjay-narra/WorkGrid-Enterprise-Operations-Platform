export const SupportSurveysItemGqlTypeDefs = `
  type SupportSurveysItem {
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
    getSupportSurveysItem(id: ID!): SupportSurveysItem
    listSupportSurveysItems(tenantId: String!, limit: Int): [SupportSurveysItem!]!
  }

  extend type Mutation {
    createSupportSurveysItem(tenantId: String!, code: String!, name: String!): SupportSurveysItem!
    deleteSupportSurveysItem(id: ID!): Boolean!
  }
`;

export const SupportSurveysItemGqlResolvers = {
  Query: {
    getSupportSurveysItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

export const SupportSlaBatchGqlTypeDefs = `
  type SupportSlaBatch {
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
    getSupportSlaBatch(id: ID!): SupportSlaBatch
    listSupportSlaBatchs(tenantId: String!, limit: Int): [SupportSlaBatch!]!
  }

  extend type Mutation {
    createSupportSlaBatch(tenantId: String!, code: String!, name: String!): SupportSlaBatch!
    deleteSupportSlaBatch(id: ID!): Boolean!
  }
`;

export const SupportSlaBatchGqlResolvers = {
  Query: {
    getSupportSlaBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSlaBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

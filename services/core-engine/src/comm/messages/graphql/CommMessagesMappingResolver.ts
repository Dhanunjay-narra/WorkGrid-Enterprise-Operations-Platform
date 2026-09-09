export const CommMessagesMappingGqlTypeDefs = `
  type CommMessagesMapping {
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
    getCommMessagesMapping(id: ID!): CommMessagesMapping
    listCommMessagesMappings(tenantId: String!, limit: Int): [CommMessagesMapping!]!
  }

  extend type Mutation {
    createCommMessagesMapping(tenantId: String!, code: String!, name: String!): CommMessagesMapping!
    deleteCommMessagesMapping(id: ID!): Boolean!
  }
`;

export const CommMessagesMappingGqlResolvers = {
  Query: {
    getCommMessagesMapping: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesMapping", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

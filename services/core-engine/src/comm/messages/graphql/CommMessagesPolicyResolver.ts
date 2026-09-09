export const CommMessagesPolicyGqlTypeDefs = `
  type CommMessagesPolicy {
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
    getCommMessagesPolicy(id: ID!): CommMessagesPolicy
    listCommMessagesPolicys(tenantId: String!, limit: Int): [CommMessagesPolicy!]!
  }

  extend type Mutation {
    createCommMessagesPolicy(tenantId: String!, code: String!, name: String!): CommMessagesPolicy!
    deleteCommMessagesPolicy(id: ID!): Boolean!
  }
`;

export const CommMessagesPolicyGqlResolvers = {
  Query: {
    getCommMessagesPolicy: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "CommMessagesPolicy", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

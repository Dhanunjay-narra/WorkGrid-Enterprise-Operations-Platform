export const SupportSurveysPayloadGqlTypeDefs = `
  type SupportSurveysPayload {
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
    getSupportSurveysPayload(id: ID!): SupportSurveysPayload
    listSupportSurveysPayloads(tenantId: String!, limit: Int): [SupportSurveysPayload!]!
  }

  extend type Mutation {
    createSupportSurveysPayload(tenantId: String!, code: String!, name: String!): SupportSurveysPayload!
    deleteSupportSurveysPayload(id: ID!): Boolean!
  }
`;

export const SupportSurveysPayloadGqlResolvers = {
  Query: {
    getSupportSurveysPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "SupportSurveysPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

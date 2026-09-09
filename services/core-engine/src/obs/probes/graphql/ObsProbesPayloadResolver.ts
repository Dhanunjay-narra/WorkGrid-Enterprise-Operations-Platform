export const ObsProbesPayloadGqlTypeDefs = `
  type ObsProbesPayload {
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
    getObsProbesPayload(id: ID!): ObsProbesPayload
    listObsProbesPayloads(tenantId: String!, limit: Int): [ObsProbesPayload!]!
  }

  extend type Mutation {
    createObsProbesPayload(tenantId: String!, code: String!, name: String!): ObsProbesPayload!
    deleteObsProbesPayload(id: ID!): Boolean!
  }
`;

export const ObsProbesPayloadGqlResolvers = {
  Query: {
    getObsProbesPayload: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesPayload", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

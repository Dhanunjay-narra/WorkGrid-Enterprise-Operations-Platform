export const ObsProbesItemGqlTypeDefs = `
  type ObsProbesItem {
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
    getObsProbesItem(id: ID!): ObsProbesItem
    listObsProbesItems(tenantId: String!, limit: Int): [ObsProbesItem!]!
  }

  extend type Mutation {
    createObsProbesItem(tenantId: String!, code: String!, name: String!): ObsProbesItem!
    deleteObsProbesItem(id: ID!): Boolean!
  }
`;

export const ObsProbesItemGqlResolvers = {
  Query: {
    getObsProbesItem: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsProbesItem", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

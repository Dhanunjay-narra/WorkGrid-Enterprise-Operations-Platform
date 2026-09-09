export const ObsAlertsBatchGqlTypeDefs = `
  type ObsAlertsBatch {
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
    getObsAlertsBatch(id: ID!): ObsAlertsBatch
    listObsAlertsBatchs(tenantId: String!, limit: Int): [ObsAlertsBatch!]!
  }

  extend type Mutation {
    createObsAlertsBatch(tenantId: String!, code: String!, name: String!): ObsAlertsBatch!
    deleteObsAlertsBatch(id: ID!): Boolean!
  }
`;

export const ObsAlertsBatchGqlResolvers = {
  Query: {
    getObsAlertsBatch: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "ObsAlertsBatch", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

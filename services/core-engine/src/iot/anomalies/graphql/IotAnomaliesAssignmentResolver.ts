export const IotAnomaliesAssignmentGqlTypeDefs = `
  type IotAnomaliesAssignment {
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
    getIotAnomaliesAssignment(id: ID!): IotAnomaliesAssignment
    listIotAnomaliesAssignments(tenantId: String!, limit: Int): [IotAnomaliesAssignment!]!
  }

  extend type Mutation {
    createIotAnomaliesAssignment(tenantId: String!, code: String!, name: String!): IotAnomaliesAssignment!
    deleteIotAnomaliesAssignment(id: ID!): Boolean!
  }
`;

export const IotAnomaliesAssignmentGqlResolvers = {
  Query: {
    getIotAnomaliesAssignment: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotAnomaliesAssignment", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};

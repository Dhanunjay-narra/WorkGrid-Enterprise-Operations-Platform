export const IotCommandsRecordGqlTypeDefs = `
  type IotCommandsRecord {
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
    getIotCommandsRecord(id: ID!): IotCommandsRecord
    listIotCommandsRecords(tenantId: String!, limit: Int): [IotCommandsRecord!]!
  }

  extend type Mutation {
    createIotCommandsRecord(tenantId: String!, code: String!, name: String!): IotCommandsRecord!
    deleteIotCommandsRecord(id: ID!): Boolean!
  }
`;

export const IotCommandsRecordGqlResolvers = {
  Query: {
    getIotCommandsRecord: async (_: any, args: { id: string }) => {
      return { id: args.id, tenantId: "tenant-001", code: "C01", name: "IotCommandsRecord", status: "ACTIVE", version: 1, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    }
  }
};
